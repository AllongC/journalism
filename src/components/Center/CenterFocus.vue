<template>
  <div class="own">
    <div class="top" @click="$router.push('/focus')">
      <span>我的关注</span>
      <p class="iconfont icon-wodeguanzhu"></p>
      <span class="iconfont icon-jiantou1"></span>
    </div>
    <div class="bottom">
      <div class="focus" v-for="item in follows" :key="item.id">
        <img v-if="item.head_img" :src="$axios.defaults.baseURL+ item.head_img" alt />
        <img v-else src="@/assets/logo.jpg" alt />
        <p>{{item.nickname}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["follows"]
};
</script>

<style lang="less" scoped>
.own {
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
    .icon-wodeguanzhu {
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
    height: 27.778vw;
    border-radius: 0vw 0vw 2.778vw 2.778vw;
    padding: 0vw 2.778vw;
    margin-top: 1.111vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .focus {
      flex: 1;
      text-align: center;
      img {
        width: 11.111vw;
        height: 11.111vw;
        border-radius: 50%;
        border: 0.556vw solid white;
        margin-right: 2.222vw;
        object-fit: cover;
      }
      p {
        width: 30.556vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 3.889vw;
        color: #2f2f2f;
      }
    }
  }
}
</style>