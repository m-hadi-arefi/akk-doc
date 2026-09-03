import postcssRtlcss from 'postcss-rtlcss'

export default {
  plugins: [
    postcssRtlcss({
      ltrPrefix: ':where([dir="ltr"])',
      rtlPrefix: ':where([dir="rtl"])'
    })
  ]
}
