import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const docsDir = path.join(rootDir, 'docs')
const enDir = path.join(docsDir, 'en')
const faDir = path.join(docsDir, 'fa')

function getAllMarkdownFiles(dir) {
  let results = []
  if (!fs.existsSync(dir)) return results
  const list = fs.readdirSync(dir)
  for (const file of list) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath))
    } else if (file.endsWith('.md')) {
      results.push(filePath)
    }
  }
  return results
}

function parseFrontmatter(content) {
  if (!content.startsWith('---')) return {}
  const endIdx = content.indexOf('---', 3)
  if (endIdx === -1) return {}
  const raw = content.slice(3, endIdx)
  const meta = {}
  for (const line of raw.split('\n')) {
    const parts = line.split(':')
    if (parts.length >= 2) {
      const key = parts[0].trim()
      const val = parts.slice(1).join(':').trim().replace(/^['"]|['"]$/g, '')
      if (key && val) meta[key] = val
    }
  }
  return meta
}

function extractLinks(content) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const links = []
  let match
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[2])
  }
  return links
}

console.log('🔍 Starting Documentation Synchronization & Parity Audit...\n')

let errors = 0
let warnings = 0

const enFiles = getAllMarkdownFiles(enDir)
const faFiles = getAllMarkdownFiles(faDir)

console.log(`📊 English Documents: ${enFiles.length}`)
console.log(`📊 Persian Documents: ${faFiles.length}\n`)

if (enFiles.length === 0 || faFiles.length === 0) {
  console.error('❌ Either English or Persian document tree is missing!')
  process.exit(1)
}

const enRelFiles = new Set(enFiles.map(f => path.relative(enDir, f).replace(/\\/g, '/')))
const faRelFiles = new Set(faFiles.map(f => path.relative(faDir, f).replace(/\\/g, '/')))

// Check parity: EN -> FA
for (const rel of enRelFiles) {
  if (!faRelFiles.has(rel)) {
    console.error(`❌ Missing Persian counterpart: docs/fa/${rel}`)
    errors++
  }
}

// Check parity: FA -> EN
for (const rel of faRelFiles) {
  if (!enRelFiles.has(rel)) {
    console.error(`❌ Missing English counterpart: docs/en/${rel}`)
    errors++
  }
}

// Check frontmatter and translation pairings
for (const f of enFiles) {
  const content = fs.readFileSync(f, 'utf-8')
  const meta = parseFrontmatter(content)
  const rel = path.relative(enDir, f).replace(/\\/g, '/')
  
  if (meta.lang && meta.lang !== 'en') {
    console.error(`❌ [${rel}] Expected lang: en, found: ${meta.lang}`)
    errors++
  }
  if (meta.translation) {
    const targetFa = path.join(docsDir, meta.translation.replace(/^\//, '') + (meta.translation.endsWith('.md') ? '' : (meta.translation.endsWith('/') ? 'index.md' : '.md')))
    // also check direct path or index.md
    const targetAlt = path.join(docsDir, meta.translation.replace(/^\//, ''), 'index.md')
    if (!fs.existsSync(targetFa) && !fs.existsSync(targetAlt)) {
      console.warn(`⚠️ [${rel}] translation target does not resolve to a file: ${meta.translation}`)
      warnings++
    }
  }
}

for (const f of faFiles) {
  const content = fs.readFileSync(f, 'utf-8')
  const meta = parseFrontmatter(content)
  const rel = path.relative(faDir, f).replace(/\\/g, '/')
  
  if (meta.lang && meta.lang !== 'fa') {
    console.error(`❌ [${rel}] Expected lang: fa, found: ${meta.lang}`)
    errors++
  }
  if (meta.translation) {
    const targetEn = path.join(docsDir, meta.translation.replace(/^\//, '') + (meta.translation.endsWith('.md') ? '' : (meta.translation.endsWith('/') ? 'index.md' : '.md')))
    const targetAlt = path.join(docsDir, meta.translation.replace(/^\//, ''), 'index.md')
    if (!fs.existsSync(targetEn) && !fs.existsSync(targetAlt)) {
      console.warn(`⚠️ [${rel}] translation target does not resolve to a file: ${meta.translation}`)
      warnings++
    }
  }
}

console.log('--------------------------------------------------')
if (errors === 0) {
  console.log(`✅ Parity & Sync Verification PASSED!`)
  console.log(`   - 0 Missing document pairs`)
  console.log(`   - ${enFiles.length} Synchronized language pairs verified`)
  if (warnings > 0) {
    console.log(`   - ${warnings} Warnings noted`)
  }
  process.exit(0)
} else {
  console.error(`❌ Verification FAILED with ${errors} error(s) and ${warnings} warning(s).`)
  process.exit(1)
}
