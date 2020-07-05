<template>
  <div>
    <HomeTop />
    <div class="outside"></div>
    <van-tabs
      sticky
      swipeable
      v-model="active"
      background="#979797"
      title-active-color="#2f2f2f"
      color="#2f2f2f"
      offset-top="3.92rem"
    >
      <van-tab
        v-for="item in column"
        :key="item.id"
        :title="item.name"
        title-style="font-size:4.444vw"
      >
        <Post :post="post" v-for="post in item.post" :key="post.id" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop";
import Post from "@/components/Post";
export default {
  components: {
    HomeTop,
    Post
  },
  data() {
    return {
      active: 0,
      column: []
    };
  },
  watch: {
    active() {
      const total = this.column[this.active];
      if (total.post.length == 0) {
        this.getPost();
      }
    }
  },
  methods: {
    getPost() {
      const total = this.column[this.active];
      this.$axios({
        url: "/post/?category=" + this.getId(),
        method: "get"
      }).then(res => {
        const { data } = res.data;
        total.post = data;
      });
    },
    getId() {
      return this.column[this.active].id;
    }
  },
  mounted() {
    this.$axios({
      url: "/category",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.column = data.map(item => {
        return {
          ...item,
          post: []
        };
      });
      this.getPost();
    });
  }
};
</script>

<style lang="less" scoped>
.outside {
  height: 16.667vw;
}
</style>