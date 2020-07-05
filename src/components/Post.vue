<template>
  <div class="post">
    <div class="singleImg" v-if="post.type==1&&post.cover.length<3">
      <div class="singInfo">
        <p class="title">{{post.title}}</p>
        <p>{{post.user.nickname}} {{post.comment_length}}跟帖</p>
      </div>
      <img :src="post.cover[0].url" alt />
    </div>
    <div class="multiImg" v-else-if="post.type==1&&post.cover.length>=3">
      <p class="title">{{post.title}}</p>
      <div class="multi">
        <img :src="post.cover[0].url" alt />
        <img :src="post.cover[1].url" alt />
        <img :src="post.cover[2].url" alt />
      </div>
      <p>{{post.user.nickname}} {{post.comment_length}}跟帖</p>
    </div>
    <div class="video" v-else-if="post.type==2&&post.cover.length>=1">
      <p class="title">{{post.title}}</p>
      <div class="mask">
        <img :src="post.cover[0].url" alt />
        <div class="bgc"></div>
        <span class="iconfont icon-ziyuan"></span>
      </div>
      <p>{{post.user.nickname}} {{post.comment_length}}跟帖</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="less" scoped>
.post {
  color: white;
}
.singleImg {
  box-sizing: border-box;
  padding: 3.889vw 3.889vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  .singInfo {
    flex: 1;
    .title {
      font-size: 4.444vw;
      margin-top: 0vw;
      color: white;
    }
    p {
      margin-top: 2.778vw;
      font-size: 3.889vw;
      color: rgb(212, 211, 211);
    }
  }
  img {
    width: 33.333vw;
    height: 20.556vw;
    object-fit: cover;
  }
}

.multiImg {
  padding: 3.889vw 3.889vw;
  border-bottom: 1px solid #e4e4e4;
  .title {
    color: white;
    font-size: 4.444vw;
    margin-bottom: 1.389vw;
  }
  .multi {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
      width: 33%;
      height: 20.556vw;
      margin: 1.111vw 0.556vw 0vw 0vw;
    }
  }
  p {
    margin-top: 2.778vw;
    font-size: 3.889vw;
    color: rgb(212, 211, 211);
  }
}

.video {
  padding: 3.889vw 3.889vw;
  border-bottom: 1px solid #e4e4e4;
  .title {
    font-size: 4.444vw;
    color: white;
    margin-top: 0vw;
  }
  .mask {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .bgc {
      position: absolute;
      width: 13.889vw;
      height: 13.889vw;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
    }
    img {
      margin-top: 1.667vw;
      height: 47.222vw;
      width: 100%;
      object-fit: cover;
    }
    .icon-ziyuan {
      position: absolute;
      font-size: 6.667vw;
      color: white;
    }
  }
  p {
    margin-top: 2.778vw;
    font-size: 3.889vw;
    color: rgb(212, 211, 211);
  }
}
</style>