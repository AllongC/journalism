<template>
  <div>
    <div v-if="!focus" class="repalce">
      <input type="text" @focus="getFocus" v-model="content" />
      <p class="iconfont font icon-pinglun1">
        <span class="comments">{{total}}</span>
      </p>
      <p @click="star" v-if="post.has_star" class="iconfont font icon-shoucang"></p>
      <p @click="star" v-else class="iconfont font icon-xiazai11"></p>
      <p class="iconfont font icon-share_icon"></p>
    </div>
    <div v-if="focus" class="getFocus">
      <textarea rows="4" @blur="unFocus" ref="textarea" v-model="content"></textarea>
      <p @click="sendContent">发送</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post", "parent_id", "total"],
  data() {
    return {
      focus: false,
      content: "",
      data: {}
    };
  },
  methods: {
    sendContent() {
      this.data = {
        content: this.content
      };
      if (this.parent_id) {
        this.data.parent_id = this.parent_id;
      }
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
        method: "post",
        data: this.data
      }).then(res => {
        console.log(res);
        this.$emit("reload");
        this.content = "";
      });
    },
    getFocus() {
      this.focus = true;
      this.data = {};
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    unFocus() {
      setTimeout(() => {
        this.focus = false;
        this.data = {};
      }, 100);
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
  }
};
</script>

<style lang="less" scoped>
.repalce {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 0;
  background-color: #111;
  height: 13.889vw;
  width: 100%;
  border-top: 1px solid #444;
  input {
    text-indent: 2.778vw;
    flex: 1;
    height: 8.333vw;
    margin-top: 2.778vw;
    border: none;
    border-radius: 4.167vw;
    margin-left: 2.778vw;
    background-color: #2f2f2f;
    color: #979797;
  }
  .font {
    font-size: 5.556vw;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    height: 13.889vw;
    line-height: 13.889vw;
    color: #fff;
    margin: 0vw 2.778vw;
  }
  .icon-pinglun1 {
    position: relative;
  }
  .comments {
    position: absolute;
    top: 2.778vw;
    left: 3.889vw;
    background-color: red;
    padding: 1.667vw 1px;
    height: 0px;
    font-size: 2.778vw;
    text-align: center;
    color: white;
    line-height: 0px;
    text-align: center;
    border-radius: 50%;
  }
  .icon-shoucang {
    color: rgb(231, 231, 93);
  }
}
.getFocus {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: flex-end;
  bottom: 0;
  background-color: #111;
  height: 25vw;
  width: 100%;
  border-top: 1px solid #444;
  color: white;
  textarea {
    flex: 1;
    text-indent: 2.778vw;
    border: none;
    resize: none;
    background-color: #2f2f2f;
    margin-left: 2.778vw;
    border-radius: 2.778vw;
    color: #979797;
  }
  p {
    margin: 0vw 2.778vw;
    background-color: #2f2f2f;
    text-align: center;
    padding: 2.778vw 5.556vw;
    border-radius: 5.556vw;
    color: #979797;
  }
}
</style>