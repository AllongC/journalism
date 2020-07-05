<template>
  <div class="centerTop">
    <img v-if="user.head_img" :src="$axios.defaults.baseURL+ user.head_img" alt />
    <img v-else src="@/assets/logo.jpg" alt />
    <div class="title">
      <p>{{user.nickname}}</p>
      <i class="vip">VIP</i>
      <i class="vip">LV.0</i>
    </div>
    <div class="dredge">
      <i>开通黑胶VIP</i>
      <span class="iconfont icon-jiantou1"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>

<style lang="less" scoped>
.centerTop {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.778vw 1.667vw 2.778vw 1.667vw;
  img {
    width: 19.444vw;
    height: 19.444vw;
    border-radius: 50%;
    object-fit: cover;
  }
  .title {
    margin-left: 1.667vw;
    flex: 1;
    color: #2f2f2f;
    font-size: 4.444vw;
    .vip {
      display: inline-block;
      padding: 0vw 2.778vw;
      height: 5.556vw;
      line-height: 5.556vw;
      text-align: center;
      background-color: #2f2f2f;
      margin-top: 1.667vw;
      border-radius: 1.111vw;
      border-radius: 2.778vw;
      font-size: 3.333vw;
      margin-right: 1.111vw;
      color: white;
    }
  }
  .dredge {
    color: #2f2f2f;
    i {
      font-size: 3.889vw;
      margin-right: 1.111vw;
    }
  }
}
</style>