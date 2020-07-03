<template>
  <div>
    <div class="set">
      <div>
        <p class="iconfont icon-zhuye1 font"></p>
        <p>主页</p>
      </div>
      <div @click="$router.push('/focus')">
        <p class="iconfont icon-wodeguanzhu font"></p>
        <p>我的关注</p>
      </div>
      <div>
        <p class="iconfont icon-wodeshoucang font"></p>
        <p>收藏</p>
      </div>
      <div @click="$router.push('/edit')">
        <p class="iconfont icon-xiugai font"></p>
        <p>修改</p>
      </div>
      <div>
        <p class="iconfont icon-shezhi font"></p>
        <p>设置</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.set {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0vw 1.667vw 2.778vw 1.667vw;
  div {
    flex: 1;
    padding: 0vw 2.222vw;
    p {
      margin-top: 1.111vw;
      font-size: 3.333vw;
      text-align: center;
      color: #2f2f2f;
    }
    .font {
      font-size: 5.556vw;
      color: #2f2f2f;
    }
  }
}
</style>