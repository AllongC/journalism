<template>
  <div class="collect">
    <div class="top">
      <span>我的收藏</span>
      <p class="iconfont icon-wodeshoucang"></p>
      <span class="iconfont icon-jiantou1"></span>
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
        <img src="https://image.pearvideo.com/cont/20200618/cont-1680794-12408180.jpg" alt />
      </div>
      <div class="video">
        <div class="mask"></div>
        <img src="https://image.pearvideo.com/cont/20200618/cont-1680794-12408180.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.collect {
  padding: 10px 0px;
  border-radius: 3.333vw;
  .top {
    height: 30px;
    padding: 0px 10px;
    text-align: center;
    line-height: 80px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #2f2f2f;
    .icon-wodeshoucang {
      flex: 1;
      text-align: right;
      margin-left: 4px;
      font-size: 16px;
    }
    .icon-jiantou1 {
      margin-left: 4px;
      font-size: 14px;
    }
  }
  .bottom {
    width: 100%;
    border-radius: 0px 0px 10px 10px;
    padding: 0px 10px;
    margin-top: 4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .video {
      height: 150px;
      position: relative;
      height: 100px;
      width: 160px;
      margin-right: 10px;
      border-radius: 20px;
      object-fit: cover;
      margin-top: 6px;
      .mask {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.2);
      }
      img {
        height: 100%;
        width: 100%;
        border-radius: 20px;
      }
    }
  }
}
</style>