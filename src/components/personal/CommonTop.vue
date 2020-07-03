<template>
  <div class="CommonTop">
    <span class="iconfont icon-xiazai6" @click="$router.back()"></span>
    <p>我的关注</p>
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
  padding: 10px;
  color: #ffffff;
  font-weight: bold;
  p {
    flex: 1;
    text-align: center;
  }
}
</style>