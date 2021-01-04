import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { XiwenTooltip } from '../dist/xiwen-tooltip.esm'
// import('../package.json').then(config => import(`../dist/${config.name}.css`))

// https://blog.csdn.net/yanzhi_2016/article/details/85339420
// Vue.use(xiwen)
// Vue.component(XiwenTooltip, XiwenTooltip.name)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
