<template>
  <div>
    <CommonTop val="我的收藏" />
    <Post :post="post" :index="index" v-for="(post,index) in post" :key="post.id" />
  </div>
</template>

<script>
import CommonTop from "@/components/personal/CommonTop";
import Post from "@/components/Post";
export default {
  components: {
    CommonTop,
    Post
  },
  data() {
    return {
      post: []
    };
  },
  mounted() {
    this.$axios({
      url: "/user_star"
    }).then(res => {
      const { data } = res.data;
      this.post = data;
    });
  }
};
</script>

<style lang="less" scoped>
</style>