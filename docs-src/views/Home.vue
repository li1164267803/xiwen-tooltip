<template>
  <div class="page-home page">
    <h2>Demo</h2>
    <section class="demo">
      <div class="section-content">
        <h2>文字多时，鼠标滑上显示</h2>
        <div class="box">
          <XiwenTooltip title="文字多时，鼠标滑上显示文字多时，鼠标滑上显示文字多时，鼠标滑上显示， 希文" />
        </div>
        <h2>文字少时，鼠标滑上不显示</h2>
        <div class="box">
          <XiwenTooltip title="文字少时 鼠标滑上不显示" />
        </div>
      </div>
    </section>
    <section class="snippets">
      <Collapse>
        <div class="section-content">
          <CodeSnippet class="snippet" :code="componentSnippet" lang="html" />
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="mainSnippet" lang="js" />
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>使用slot的写法</h2>
        <div class="box">
          <XiwenTooltip>
            <template slot="title">
              使用slot的写法23123123123123s23424435345345355555
            </template>
            使用slot的写法23123123123123s23424435345345355555
          </XiwenTooltip>
        </div>
      </div>
    </section>
    <section class="snippets">
      <Collapse>
        <div class="section-content">
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
import { XiwenTooltip } from '../../dist/xiwen-tooltip.esm'

const mainSnippet = `
import {XiwenTooltip} from 'xiwen-tooltip';

export default {
  name: 'App',
  components: {
    XiwenTooltip
  }
}
<style lang="less" >
.box {
  width: 200px;
  height: 50px;
  border: 1px solid #000;
}
</style>

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
    <template slot="title">
      使用slot的写法23123123123123s23424435345345355555
    </template>
    使用slot的写法23123123123123s23424435345345355555
  </XiwenTooltip>
</div>
`
export default {
  name: 'Home',
  components: {
    CodeSnippet,
    Collapse,
    XiwenTooltip
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
<style lang="less" >
.box {
  width: 200px;
  height: 50px;
  border: 1px solid #000;
}
</style>
