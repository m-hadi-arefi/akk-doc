---
title: "AI-Augmented Software Engineering"
lang: en
translation: /fa/knowledge/ai/overview
---

# AI-Augmented Software Engineering

## Overview
Guidelines for leveraging Artificial Intelligence to accelerate software delivery while maintaining engineering quality and organizational security.

## Core Practices

### 1. Prompt Engineering for Developers
- **Context Injection**: Provide architectural constraints, interface types, and error handling expectations in the prompt.
- **Few-Shot Examples**: Give 1-2 examples of approved code style before asking for complex implementations.
- **Verification First**: Always prompt the AI to produce corresponding unit tests for any generated logic.

### 2. Model Context Protocol (MCP)
- Using MCP servers to allow AI agents to safely read documentation, inspect databases schemas, and interact with development tools without leaking secrets.

### 3. Human-in-the-Loop Rule
```text
AI Suggests ──► Human Reviews ──► Automated CI Tests ──► Human Approves
```
- No AI-generated code may ever be merged directly without human review and automated test passage.
