import base, { name, file } from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const cname = name.split('-').reduce((acc, cur) => acc + cur.replace(cur[0], cur[0].toUpperCase()), '')

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: cname,
    file: file('min'),
    format: 'iife',
    globals: {
      'ant-design-vue': 'antDesignVue'
    }
  }
})

config.plugins.push(terser())

export default config
