<template>
  <div class="HomeTop">
    <span class="iconfont icon-logo"></span>
    <div class="search">
      <span class="iconfont icon-yuyin1"></span>
      <p>关键词</p>
    </div>
    <p class="iconfont icon-gerenzhongxin"></p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.HomeTop {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2f2f2f;
  height: 16.667vw;
  background-color: #989898;
  .icon-logo {
    font-size: 2.778vw;
    margin: 0 1.389vw;
  }
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 8.333vw;
    border: 1px solid #2f2f2f;
    border-radius: 4.167vw;
    span {
      font-size: 4.444vw;
      margin-right: 1.389vw;
    }
    p {
      font-size: 4.444vw;
    }
  }
  .icon-gerenzhongxin {
    margin: 0 3.889vw;
    font-size: 6.111vw;
  }
}
</style>