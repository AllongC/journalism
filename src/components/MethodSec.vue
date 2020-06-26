<template>
  <div class="modeSce clearfix">
    <p class="modeFont">
      更多
      <span class="iconfont icon-arrow-right"></span>
    </p>
    <ul>
      <li @click="togger">
        <p class="iconfont icon-wechat"></p>
      </li>
      <li>
        <p class="iconfont icon-qq"></p>
      </li>
      <li>
        <p class="iconfont icon-social-_logo-facebook"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    togger() {
      this.$emit("wxClick");
    }
  }
};
</script>

<style lang="less" scoped>
.modeSce {
  margin-top: 20px;
  padding: 0vw 6vw 0vw 5.556vw;
  ul {
    float: right;
  }
  .modeFont {
    float: left;
    margin-left: 2.778vw;
    font-size: 3.889vw;
    color: white;
    .icon-arrow-right {
      font-size: 2.778vw;
    }
  }
  li {
    float: left;
    margin-right: 5.556vw;
    .icon-wechat {
      font-size: 5.556vw;
      color: #00ca0b;
    }
    .icon-qq {
      font-size: 5.556vw;
      color: #2b7eed;
    }
    .icon-social-_logo-facebook {
      font-size: 5.556vw;
      color: #3b57a0;
    }
  }
}
</style>