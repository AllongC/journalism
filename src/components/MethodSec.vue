<template>
  <div class="modeSce clearfix">
    <p class="modeFont">
      更多
      <span class="iconfont icon-jiantou"></span>
    </p>
    <ul>
      <li>
        <p class="iconfont icon-weixin1"></p>
      </li>
      <li>
        <p class="iconfont icon-QQ"></p>
      </li>
      <li>
        <p class="iconfont icon-Facebook"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.modeSce {
  margin-top: 5.556vw;
  padding: 0vw 6vw 0vw 5.556vw;
  ul {
    float: right;
  }
  .modeFont {
    float: left;
    margin-left: 2.778vw;
    font-size: 3.889vw;
    color: white;
    .icon-jiantou {
      font-size: 2.778vw;
    }
  }
  li {
    float: left;
    margin-right: 5.556vw;
    .icon-weixin1 {
      font-size: 5.556vw;
      color: #00ca0b;
    }
    .icon-QQ {
      font-size: 5.556vw;
      color: #2b7eed;
    }
    .icon-Facebook {
      font-size: 5.556vw;
      color: #3b57a0;
    }
  }
}
</style>