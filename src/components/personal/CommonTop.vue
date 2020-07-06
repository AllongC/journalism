<template>
  <div class="CommonTop">
    <span class="iconfont icon-xiazai6" @click="$router.back()"></span>
    <p>{{val}}</p>
  </div>
</template>

<script>
export default {
  props: ["val"]
};
</script>

<style lang="less" scoped>
.CommonTop {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.778vw;
  color: #ffffff;
  font-weight: bold;
  font-size: 4.444vw;
  p {
    flex: 1;
    text-align: center;
  }
}
</style>