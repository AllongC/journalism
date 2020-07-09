<template>
  <div class="quit">
    <p class="iconfont icon-guanbi"></p>
    <p @click="quit">退出</p>
  </div>
</template>

<script>
export default {
  methods: {
    quit() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      this.$router.replace("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.quit {
  margin: 1.111vw 2.778vw 2.778vw 2.778vw;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8.333vw;
  padding: 0.556vw 0px;
  p {
    text-align: center;
    color: #2f2f2f;
    font-size: 3.889vw;
  }
  .icon-guanbi {
    color: #2f2f2f;
    font-size: 6.111vw;
  }
}
</style>