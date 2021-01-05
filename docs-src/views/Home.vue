<template>
  <div class="page-home page">
    <h2>Description</h2>
    <section class="demo">
      <div class="section-content">
        <v-component msg="vue component" />
      </div>
    </section>

    <section class="snippets">
      <Collapse>
        <div class="section-content">
          <CodeSnippet class="snippet" :code="componentSnippet" lang="html" />
          <CodeSnippet class="snippet" :code="componentSnippet2" lang="html" />
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="mainSnippet" lang="js" />
        </div>
      </Collapse>
    </section>
  </div>
</template>

<script>
import CodeSnippet from '../components/CodeSnippet.vue'
import Collapse from '../components/Collapse.vue'

const mainSnippet = `
import {XiwenTooltip} from 'xiwen-tooltip';

export default {
  name: 'App',
  components: {
    XiwenTooltip
  }
}
`

const componentSnippet = `
// 外层容器一定要有宽带和高度
<div class="box">
  <XiwenTooltip  title="十大高手的方123123123123123s23424435345345355555"></XiwenTooltip>
</div>
`
const componentSnippet2 = `
// 使用slot的写法
<div class="box">
  <XiwenTooltip>
    <template slot="title">十大高手的方123123123123123s23424435345345355555</template>
    使用slot的写法23123123123123s23424435345345355555
  </XiwenTooltip>
</div>
`
export default {
  name: 'Home',
  components: {
    CodeSnippet,
    Collapse
  },

  data() {
    return {
      mainSnippet,
      componentSnippet,
      componentSnippet2
    }
  }
}
</script>
