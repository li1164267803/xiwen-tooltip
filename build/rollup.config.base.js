import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import css from 'rollup-plugin-css-only'
import CleanCSS from 'clean-css'
import json from 'rollup-plugin-json'
import fs from 'fs'

const config = require('../package.json')

const { name, version } = config
const file = type => `dist/${name}.${type}.js`

export { name, file }

export default {
  input: 'src/index.js',
  plugins: [
    resolve(),
    // resolve({
    //   mainFields: ['module', 'jsnext:main', 'main', 'browser'],
    //   extensions: ['.vue']
    // }),
    vue({
      css: false
    }),
    css({
      output(style) {
        !fs.existsSync('dist') && fs.mkdirSync('dist')
        fs.writeFileSync(`dist/${name}.css`, new CleanCSS().minify(style).styles)
      }
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
    }),
    cjs(),
    replace({
      VERSION: JSON.stringify(version)
    }),
    json()
  ],
  // 使用rollup打包，我们在自己的库中需要使用第三方库，例如lodash等，又不想在最终生成的打包文件中出现jquery。这个时候我们就需要使用external属性。比如我们使用了lodash，
  // external: ['moment', 'ant-design-vue'], // 如果这样配置的话，在别的项目中使用时，如果项目没有使用ant-design-vue 将没有ui效果
  external: ['moment', 'TreeNode'],
  watch: {
    include: 'src/**'
  }
}
