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
    <div class="set"></div>
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
    margin: 10px 10px 0px 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    padding: 10px 6px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .title {
      margin-left: 6px;
      flex: 1;
      color: #2f2f2f;
      .vip {
        display: inline-block;
        padding: 0px 10px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background-color: #2f2f2f;
        margin-top: 6px;
        border-radius: 4px;
        border-radius: 10px;
        font-size: 12px;
        margin-right: 4px;
        color: white;
      }
    }
    .dredge {
      color: #2f2f2f;
      i {
        font-size: 14px;
        margin-right: 4px;
      }
    }
  }
  .set {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px 10px 0px 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    padding: 10px 6px;
  }
}
</style>