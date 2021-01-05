<template>
  <div class="page-Start page">
    <section class="snippets">
      <div class="box">
        <XiwenTooltip title="十大高手的方123123123123123s23424435345345355555" />
      </div>
      <div class="box">
        <XiwenTooltip title="文字少不显示" />
      </div>
      <div class="box">
        <XiwenTooltip>
          <template slot="title">
            使用slot的写法23123123123123s23424435345345355555
          </template>
          使用slot的写法23123123123123s23424435345345355555
        </XiwenTooltip>
      </div>
      <div class="section-content">
        <CodeSnippet class="snippet" :code="mainSnippet" lang="js" />
      </div>
    </section>
  </div>
</template>

<script>
import CodeSnippet from '../components/CodeSnippet.vue'
import { XiwenTooltip } from '../../dist/xiwen-tooltip.esm'

import { config, upName } from '../config'

const mainSnippet = `
import Vue from 'vue'
import App from './App.vue'
import ${upName} from '${config.name}'
// import '${config.name}.css'  不需要引入这个

Vue.use(${upName})

new Vue({
  el: '#app',
  render: h => h(App)
});
`
export default {
  name: 'Start',
  components: {
    CodeSnippet,
    XiwenTooltip
  },
  data() {
    return {
      mainSnippet
    }
  }
}
</script>

<style lang="less" >
.box {
  width: 200px;
  height: 50px;
  border: 1px solid #000;
}
</style>
