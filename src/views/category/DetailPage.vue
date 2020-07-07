<template>
  <div>
    <div class="DetailTop">
      <span class="iconfont icon-xiazai6" @click="$router.back()"></span>
      <div class="middle">
        <p class="iconfont icon-logo"></p>
      </div>
      <p class="iconfont icon-gerenzhongxin" @click="$router.push('/center')"></p>
    </div>
    <div class="normal" v-if="post.type==1">
      <h2>{{post.title}}</h2>
      <p>{{post.user.nickname}} {{post.create_date.split('T')[0]}}</p>
      <div class="content" v-html="post.content"></div>
    </div>
    <div class="video" v-else-if="post.type==2">
      <video
        controls
        src="https://video.pearvideo.com/mp4/third/20200629/cont-1682744-11905134-133619-hd.mp4"
        poster="https://image.pearvideo.com/cont/20200629/cont-1682744-12415386.png"
      ></video>
      <div class="userInfo">
        <img v-if="post.user.head_img" :src="$axios.defaults.baseURL+post.user.head_img" alt />
        <img v-else src="@/assets/logo.jpg" alt />
        <p>{{post.user.nickname}}</p>
      </div>
      <div class="title">{{post.title}}</div>
    </div>
    <div class="roll">
      <p @click="unFollow" v-if="post.has_follow" class="iconfont font icon-B"></p>
      <p @click="follow" v-else class="iconfont font icon-guanzhu3"></p>
      <p is-link @click="showPopup" class="iconfont font icon-pinglun1"></p>
      <p @click="like" class="iconfont font icon-ziyuan1" :class="{redfont:post.has_like}"></p>
      <p class="font num">{{post.like_length}}</p>
      <p @click="star" v-if="post.has_star" class="iconfont font icon-shoucang"></p>
      <p @click="star" v-else class="iconfont font icon-xiazai11"></p>
      <p class="iconfont font icon-share_icon"></p>
    </div>
    <van-popup v-model="commentShow" round position="bottom" :style="{ height: '70%',}">
      <p class="title">评论</p>
      <p class="miniTitle">精彩评论</p>
      <Comment :comment="item" v-for="item in comment" :key="item.id" />
    </van-popup>
  </div>
</template>

<script>
import Comment from "@/components/Comment/index";
export default {
  components: {
    Comment
  },
  data() {
    return {
      post: [],
      commentShow: false,
      comment: []
    };
  },
  methods: {
    showPopup() {
      this.commentShow = true;
    },
    load() {
      this.$axios({
        url: "/post/" + this.$route.params.id
      }).then(res => {
        const { data } = res.data;
        this.post = data;
        console.log(this.post);
      });
    },
    unFollow() {
      this.$axios({
        url: "/user_unfollow/" + this.post.user.id
      }).then(res => {
        const { message } = res.data;
        if (message == "取消关注成功") {
          this.post.has_follow = false;
        }
      });
    },
    like() {
      this.$axios({
        url: "/post_like/" + this.$route.params.id
      }).then(res => {
        const { message } = res.data;
        if (message == "点赞成功") {
          this.post.has_like = true;
          this.post.like_length++;
        } else {
          this.post.has_like = false;
          this.post.like_length--;
        }
      });
    },
    follow() {
      this.$axios({
        url: "/user_follows/" + this.post.user.id
      }).then(res => {
        const { message } = res.data;
        if (message == "关注成功") {
          this.post.has_follow = true;
        }
      });
    },
    star() {
      this.$axios({
        url: "/post_star/" + this.$route.params.id
      }).then(res => {
        const { message } = res.data;
        if (message == "收藏成功") {
          this.post.has_star = true;
        } else {
          this.post.has_star = false;
        }
      });
    }
  },
  mounted() {
    this.load();
    this.$axios({
      url: "/post_comment/" + this.$route.params.id
    }).then(res => {
      const { data } = res.data;
      this.comment = data;
      console.log(this.comment);
    });
  }
};
</script>

<style lang="less" scoped>
.DetailTop {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.778vw;
  background-color: #979797;
  .icon-xiazai6 {
    color: #2f2f2f;
    font-size: 4.444vw;
  }
  .middle {
    flex: 1;
    text-align: center;
  }
  .icon-gerenzhongxin {
    color: #2f2f2f;
    font-size: 5.556vw;
  }
}

.normal {
  padding: 10px;
  color: rgb(233, 230, 230);
  h2 {
    font-size: 5vw;
  }
  p {
    color: rgb(233, 230, 230);
    font-size: 3.333vw;
    margin: 1.667vw 0px;
  }
  /deep/ .content {
    font-size: 3.889vw;
    img {
      max-width: 100%;
      object-fit: cover;
    }
  }
}

.video {
  color: rgb(233, 230, 230);
  font-size: 4.444vw;
  video {
    width: 100%;
  }
  .userInfo {
    padding: 6.667vw 2.778vw;
    display: flex;
    align-items: center;
    img {
      width: 6.667vw;
      height: 6.667vw;
      border-radius: 50%;
    }
    p {
      margin-left: 2.222vw;
      flex: 1;
      font-size: 3.889vw;
      color: #888;
    }
  }
  .title {
    font-size: 4.444vw;
    font-weight: bold;
    padding: 0vw 2.778vw;
  }
  .mini {
    padding: 0vw 2.778vw;
    font-size: 3.333vw;
    margin-top: 2.778vw;
  }
}
.roll {
  position: fixed;
  right: 0;
  top: 50%;
  margin-top: -100px;
  height: 200px;
  width: 50px;
  .font {
    font-size: 22px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    height: 50px;
    line-height: 50px;
    color: #fff;
  }
  .num {
    height: 0px;
    line-height: 0px;
    font-size: 12px;
  }
  .icon-ziyuan1 {
    font-size: 22px;
  }
  .icon-B {
    color: red;
  }
  .redfont {
    color: red;
  }
  .icon-shoucang {
    color: rgb(231, 231, 93);
  }
}
.van-popup {
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2.778vw;
  .title {
    text-align: center;
    color: white;
  }
  .miniTitle {
    color: white;
    font-size: 3.333vw;
  }
}
</style>