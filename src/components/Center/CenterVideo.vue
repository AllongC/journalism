<template>
  <div class="collect">
    <div class="top">
      <span>我的收藏</span>
      <p class="iconfont icon-wodeshoucang"></p>
      <span class="iconfont icon-jiantou1" @click="$router.push('/collect')"></span>
    </div>
    <div class="bottom">
      <div class="video">
        <div class="mask"></div>
        <img src="https://image.pearvideo.com/cont/20200629/cont-1682744-12415386.png" alt />
      </div>
      <div class="video">
        <div class="mask"></div>
        <img src="https://image.pearvideo.com/cont/20200618/cont-1680794-12408180.jpg" alt />
      </div>
      <div class="video">
        <div class="mask"></div>
        <img src="https://image.pearvideo.com/cont/20200630/11905134-153447-1.png" alt />
      </div>
      <div class="video">
        <div class="mask"></div>
        <img src="https://image.pearvideo.com/cont/20200615/11905134-150036-1.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.collect {
  padding: 2.778vw 0vw;
  border-radius: 11.999vw;
  .top {
    height: 8.333vw;
    padding: 0vw 2.778vw;
    text-align: center;
    line-height: 8.333vw;
    display: flex;
    align-items: center;
    font-size: 3.889vw;
    color: #2f2f2f;
    .icon-wodeshoucang {
      flex: 1;
      text-align: right;
      margin-left: 1.111vw;
      font-size: 4.444vw;
    }
    .icon-jiantou1 {
      margin-left: 1.111vw;
      font-size: 3.889vw;
    }
  }
  .bottom {
    width: 100%;
    height: 61.111vw;
    border-radius: 0vw 0vw 2.778vw 2.778vw;
    margin-top: 1.111vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .video {
      height: 41.667vw;
      position: relative;
      height: 27.778vw;
      width: 44.444vw;
      margin-right: 1.389vw;
      border-radius: 5.556vw;
      object-fit: cover;
      margin-top: 1.667vw;
      .mask {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 5.556vw;
        background-color: rgba(0, 0, 0, 0.2);
      }
      img {
        height: 100%;
        width: 100%;
        border-radius: 5.556vw;
      }
    }
  }
}
</style>