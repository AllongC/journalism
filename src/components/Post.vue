<template>
  <div class="item" :class="{two:index % 2 !== 0}">
    <div class="singlePhoto" v-if="post.type==1&&post.cover.length==1">
      <div class="mask">
        <p class="title">{{post.title}}</p>
        <p class="comment">{{post.user.nickname}} {{post.comment_length}}跟帖</p>
      </div>
      <img :src="post.cover[0].url" alt />
    </div>
    <div class="multiPhoto" v-if="post.type==1&&post.cover.length>=3">
      <div class="mask">
        <p class="title">{{post.title}}</p>
        <p class="comment">{{post.user.nickname}} {{post.comment_length}}跟帖</p>
      </div>
      <img :src="post.cover[0].url" alt />
    </div>
    <div class="video" v-else-if="post.type==2&&post.cover.length>=1">
      <div class="mask">
        <p class="title">{{post.title}}</p>
        <p class="comment">{{post.user.nickname}} {{post.comment_length}}跟帖</p>
      </div>
      <img :src="post.cover[0].url" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: ["post", "index"],
  mounted() {
    console.log(this.index);
    console.log(this.index % 2 !== 0);
  }
};
</script>

<style lang="less" scoped>
.item {
  display: inline-block;
  overflow: hidden;
  margin: 10px 10px 0px 10px;
  width: 44%;
  height: 200px;
  background-color: #555;
  border-radius: 30px;
}
.two {
  margin-top: 20px;
}
.singlePhoto {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    min-height: 100px;
    object-fit: cover;
  }
  .mask {
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 14px;
    line-height: 24px;
    padding: 0px 6px;
    .title {
      height: 60px;
    }
    .comment {
      font-size: 12px;
      margin-top: 10px;
      text-align: center;
    }
  }
}
.multiPhoto {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    min-height: 100px;
    object-fit: cover;
  }
  .mask {
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 14px;
    line-height: 24px;
    padding: 0px 6px;
    .title {
      height: 60px;
    }
    .comment {
      font-size: 12px;
      margin-top: 10px;
      text-align: center;
    }
  }
}
.video {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    min-height: 100px;
    object-fit: cover;
  }
  .mask {
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 14px;
    padding: 0px 6px;
    .title {
      height: 60px;
    }
    .comment {
      font-size: 12px;
      margin-top: 10px;
      text-align: center;
    }
  }
}
</style>