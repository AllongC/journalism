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
  padding: 10px 0px;
  border-radius: 3.333vw;
  .top {
    height: 30px;
    padding: 0px 10px;
    text-align: center;
    line-height: 30px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #2f2f2f;
    .icon-wodeguanzhu {
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
    height: 100px;
    border-radius: 0px 0px 10px 10px;
    padding: 0px 10px;
    margin-top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    .focus {
      flex: 1;
      text-align: center;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid white;
        margin-right: 8px;
      }
      p {
        width: 110px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #2f2f2f;
      }
    }
  }
}
</style>