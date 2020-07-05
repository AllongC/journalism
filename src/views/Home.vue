<template>
  <div>
    <HomeTop />
    <van-tabs v-model="active" background="#979797" title-active-color="#2f2f2f" color="#2f2f2f">
      <van-tab title="关注" title-style="font-size:4.444vw"></van-tab>
      <van-tab title="粉丝" title-style="font-size:4.444vw"></van-tab>
      <van-tab title="搜索" title-style="font-size:4.444vw"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop";
export default {
  components: {
    HomeTop
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less" scoped>
</style>