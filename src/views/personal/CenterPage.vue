<template>
  <div class="palette">
    <div class="totalTop">
      <CenterTop :user="user" />
      <CenterSet :userId="userId" />
      <CenterFocus />
      <CenterVideo />
    </div>
    <CenterQuit />
  </div>
</template>

<script>
import CenterTop from "@/components/Center/CenterTop";
import CenterSet from "@/components/Center/CenterSet";
import CenterFocus from "@/components/Center/CenterFocus";
import CenterVideo from "@/components/Center/CenterVideo";
import CenterQuit from "@/components/Center/CenterQuit";
export default {
  components: {
    CenterTop,
    CenterSet,
    CenterFocus,
    CenterVideo,
    CenterQuit
  },
  data() {
    return {
      user: [],
      userId: localStorage.getItem("userId")
    };
  },
  mounted() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId")
    }).then(res => {
      const { data, message } = res.data;
      if (message == "获取成功") {
        this.user = data;
      }
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
  box-sizing: border-box;
  .totalTop {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    margin: 8.333vw 2.778vw 0vw 2.778vw;
  }
}
</style>