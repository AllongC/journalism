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
      <p is-link @click="showPopup" class="iconfont font icon-pinglun1">
        <span class="comments">{{commentTotal}}</span>
      </p>
      <p @click="like" class="iconfont font icon-ziyuan1" :class="{redfont:post.has_like}"></p>
      <p class="font num">{{post.like_length}}</p>
      <p @click="star" v-if="post.has_star" class="iconfont font icon-shoucang"></p>
      <p @click="star" v-else class="iconfont font icon-xiazai11"></p>
      <p class="iconfont font icon-share_icon"></p>
    </div>
    <van-popup v-model="commentShow" round position="bottom" :style="{ height: '70%',}">
      <p class="title">评论</p>
      <p class="miniTitle">精彩评论</p>
      <Comment :comment="item" v-for="item in comment" :key="item.id" @sendId="getId" />
      <Input :post="post" ref="Input" :parent_id="parent_id" @reload="reload" :total="total" />
    </van-popup>
  </div>
</template>

<script>
import Comment from "@/components/Comment/index";
import Input from "@/components/Comment/Input";
export default {
  components: {
    Comment,
    Input
  },
  data() {
    return {
      post: [],
      commentShow: false,
      comment: [],
      parent_id: "",
      total: 0
    };
  },
  computed: {
    commentTotal() {
      this.comment.forEach(item => {
        if (item.content) {
          this.total++;
          this.isParent(item.parent);
        }
      });
      return this.total;
    }
  },
  methods: {
    isParent(item) {
      if (item) {
        this.total++;
        this.isParent();
      }
    },
    getComment() {
      this.$axios({
        url: "/post_comment/" + this.$route.params.id
      }).then(res => {
        const { data } = res.data;
        this.comment = data;
        this.total = 0;
      });
    },
    reload() {
      this.getComment();
    },
    showPopup() {
      this.commentShow = true;
    },
    getId(id) {
      this.parent_id = id;
      this.$refs.Input.getFocus();
    },
    load() {
      this.$axios({
        url: "/post/" + this.$route.params.id
      }).then(res => {
        const { data } = res.data;
        this.post = data;
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
    this.getComment();
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
  padding: 2.778vw;
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
  margin-top: -27.778vw;
  height: 55.556vw;
  width: 13.889vw;
  .font {
    font-size: 6.111vw;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    height: 13.889vw;
    line-height: 13.889vw;
    color: #fff;
  }
  .num {
    height: 0vw;
    line-height: 0vw;
    font-size: 3.333vw;
  }
  .icon-ziyuan1 {
    font-size: 6.111vw;
  }
  .icon-pinglun1 {
    position: relative;
  }
  .comments {
    position: absolute;
    top: 1.944vw;
    left: 7.222vw;
    background-color: red;
    padding: 1.667vw 0px;
    width: 4.444vw;
    height: 0vw;
    font-size: 2.222vw;
    text-align: center;
    color: white;
    line-height: 0px;
    text-align: center;
    border-radius: 50%;
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
  padding-bottom: 13.889vw;
  .title {
    margin-top: 2.778vw;
    text-align: center;
    color: white;
  }
  .miniTitle {
    color: white;
    font-size: 3.333vw;
    margin-left: 2.778vw;
  }
}
</style>