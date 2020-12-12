<template>
  <div ref="showTips" class="xiwen-show-tips">
    <Tooltip
      v-if="isShowTips"
      ref="Tooltip"
      v-bind="{ ...$props, ...$attrs }"
      v-on="$listeners"
    >
      <template slot="title">
        <slot name="title" />
      </template>
      <div class="content" :style="contentStyle" @mouseleave="mouseleave">
        <slot :style="contentStyle">
          {{ contentText }}
        </slot>
      </div>
    </Tooltip>
    <div
      v-else
      :style="contentStyle"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
    >
      <slot>{{ contentText }}</slot>
    </div>
  </div>
</template>

<script>
import { Tooltip } from 'ant-design-vue'

export default {
  name: 'XiwenTooltip',
  components: { Tooltip },
  props: {
    title: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'rightTop'
    },
    overlayClassName: {
      type: String,
      default: 'xiwen-preinstall'
    },
    cuttingNum: {
      // 显示几行后裁切
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      isShowTips: false
    }
  },
  computed: {
    contentStyle() {
      const style = {}
      style.webkitLineClamp = this.cuttingNum
      return style
    },
    contentText() {
      const { title } = this.$props
      if (!title) {
        return this.$slots.default[0].text
      }

      return title
    }
  },
  mounted() {
    // 用于ref调用，如果直接ref绑定的其实是当前的组件，并不是ui库的组件，所有需要使用forward-ref来绑定
    this.$emit('forward-ref', this.$refs.Tooltip)
  },
  methods: {
    mouseenter() {
      const {
        contentText,
        $refs: {
          showTips,
          showTips: { offsetWidth, offsetHeight }
        }
      } = this
      const textDiv = document.createElement('div')
      const curStyle = window.getComputedStyle(showTips)
      textDiv.style.cssText = `
                word-break: break-word;
                width:${offsetWidth}px;
                font-size: ${curStyle.fontSize || '14px'};
                font-weight: ${curStyle.fontWeight || '100'};
                line-height: ${curStyle.lineHeight || '22px'};
            `
      document.body.appendChild(textDiv)
      textDiv.innerHTML = contentText
      textDiv.offsetHeight > offsetHeight && (this.isShowTips = true)
      document.body.removeChild(textDiv)
    },
    getCurrentColor(percentage) {
      if (typeof this.color === 'function') {
        return this.color(percentage)
      } else if (typeof this.color === 'string') {
        return this.color
      } else {
        return this.getLevelColor(percentage)
      }
    },
    mouseleave() {
      this.isShowTips = false
    }
  }
}
</script>

<style lang="scss">
.xiwen-preinstall {
  .ant-tooltip-inner {
    background-color: #fff;
    color: #666666;
  }
  .ant-tooltip-arrow::before {
    background-color: #fff;
  }
}
.xiwen-show-tips {
  div {
    display: block;
    overflow: hidden;
    display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示 。
    text-overflow: ellipsis; // 可以用来多行文本的情况下，用省略号“...”隐藏超出范围的文本 。
    -webkit-box-orient: vertical; // 设置或检索伸缩盒对象的子元素的排列方式 。
    // -webkit-line-clamp: 1;
  }
}
</style>
