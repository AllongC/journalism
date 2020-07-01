<template>
  <div class="palette">
    <div class="centerTop">
      <img src="@/assets/logo.jpg" alt />
      <div class="title">
        <p>Along丶C</p>
        <i class="vip">VIP</i>
        <i class="vip">LV.0</i>
      </div>
      <div class="dredge">
        <i>开通黑胶VIP</i>
        <span class="iconfont icon-jiantou1"></span>
      </div>
    </div>
    <div class="set">
      <div>
        <p class="iconfont icon-zhuye1 font"></p>
        <p>主页</p>
      </div>
      <div>
        <p class="iconfont icon-wodeguanzhu font"></p>
        <p>我的关注</p>
      </div>
      <div>
        <p class="iconfont icon-wodeshoucang font"></p>
        <p>收藏</p>
      </div>
      <div>
        <p class="iconfont icon-xiugai font"></p>
        <p>修改</p>
      </div>
      <div>
        <p class="iconfont icon-shezhi font"></p>
        <p>设置</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: []
    };
  },
  mounted() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId")
    }).then(res => {
      const { data, message } = res.data;
      console.log(data);
    });
  }
};
</script>

<style lang="less" scoped>
.palette {
  background-color: #2f2f2f;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .centerTop {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.778vw 2.778vw 0vw 2.778vw;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 3.333vw;
    padding: 2.778vw 1.667vw;
    img {
      width: 19.444vw;
      height: 19.444vw;
      border-radius: 50%;
    }
    .title {
      margin-left: 1.667vw;
      flex: 1;
      color: #2f2f2f;
      .vip {
        display: inline-block;
        padding: 0vw 2.778vw;
        height: 5.556vw;
        line-height: 5.556vw;
        text-align: center;
        background-color: #2f2f2f;
        margin-top: 1.667vw;
        border-radius: 1.111vw;
        border-radius: 2.778vw;
        font-size: 3.333vw;
        margin-right: 1.111vw;
        color: white;
      }
    }
    .dredge {
      color: #2f2f2f;
      i {
        font-size: 3.889vw;
        margin-right: 1.111vw;
      }
    }
  }
  .set {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.111vw 2.778vw 0vw 2.778vw;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 3.333vw;
    padding: 2.778vw 1.667vw;
    div {
      flex: 1;
      padding: 0vw 2.222vw;
      p {
        margin-top: 1.111vw;
        font-size: 3.333vw;
        text-align: center;
      }
      .font {
        font-size: 5.556vw;
      }
    }
  }
}
</style>