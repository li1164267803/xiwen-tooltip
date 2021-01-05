import XiwenTooltip from './lib/tooltip-antd/index.vue'

// 可以放入多个组件，一起抛出
const components = [
  XiwenTooltip
]

export {
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
