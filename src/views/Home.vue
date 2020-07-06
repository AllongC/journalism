<template>
  <div>
    <HomeTop />
    <div class="outside"></div>
    <van-tabs
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
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="loadMore"
        >
          <Post :post="post" :index="index" v-for="(post,index) in item.post" :key="post.id" />
        </van-list>
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
        method: "get",
        params: {
          pageIndex: total.pageIndex,
          pageSize: total.pageSize
        }
      }).then(res => {
        const { data } = res.data;
        total.post = [...total.post, ...data];
        if (res.data.data.length < total.pageSize) {
          total.finished = true;
        }
      });
    },
    getId() {
      return this.column[this.active].id;
    },
    loadMore() {
      const total = this.column[this.active];
      total.pageIndex += 1;
      this.getPost();
      total.loading = false;
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
          post: [],
          pageIndex: 1,
          pageSize: 5,
          loading: false,
          finished: false
        };
      });
      this.getPost();
    });
  }
};
</script>

<style lang="less" scoped>
</style>