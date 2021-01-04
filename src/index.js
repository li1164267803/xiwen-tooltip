import Component from './lib/component.vue'
import XiwenTooltip from './lib/tooltip-antd/index.vue'
import 'ant-design-vue/lib/tooltip/style/index.js'

const components = [
  Component,
  XiwenTooltip
]

export {
  Component,
  XiwenTooltip
}

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
