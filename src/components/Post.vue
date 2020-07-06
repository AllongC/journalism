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
  props: ["post", "index"]
};
</script>

<style lang="less" scoped>
.item {
  display: inline-block;
  overflow: hidden;
  margin: 2.778vw 2.778vw 0vw 2.778vw;
  width: 44%;
  height: 55.556vw;
  background-color: #555;
  border-radius: 8.333vw;
}
.two {
  margin-top: 5.556vw;
}
.singlePhoto {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    min-height: 27.778vw;
    object-fit: cover;
  }
  .mask {
    position: absolute;
    bottom: 0;
    height: 27.778vw;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 3.889vw;
    line-height: 6.667vw;
    padding: 0vw 1.667vw;
    .title {
      height: 16.667vw;
    }
    .comment {
      font-size: 3.333vw;
      margin-top: 2.778vw;
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
    min-height: 27.778vw;
    object-fit: cover;
  }
  .mask {
    position: absolute;
    bottom: 0;
    height: 27.778vw;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 3.889vw;
    line-height: 6.667vw;
    padding: 0vw 1.667vw;
    .title {
      height: 16.667vw;
    }
    .comment {
      font-size: 3.333vw;
      margin-top: 2.778vw;
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
    min-height: 27.778vw;
    object-fit: cover;
  }
  .mask {
    position: absolute;
    bottom: 0;
    height: 27.778vw;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 3.889vw;
    padding: 0vw 1.667vw;
    .title {
      height: 16.667vw;
    }
    .comment {
      font-size: 3.333vw;
      margin-top: 2.778vw;
      text-align: center;
    }
  }
}
</style>