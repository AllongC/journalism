<template>
  <div>
    <div class="totalTop">
      <CenterTop :user="user" />
      <CenterSet />
      <CenterFocus :follows="follows" />
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
      follows: []
    };
  },
  created() {
    this.$axios({
      url: "/user_follows",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      if (data.length > 3) {
        data.length = 3;
      }
      this.follows = data;
      console.log(this.follows);
    });
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
.totalTop {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5.556vw;
  margin: 8.333vw 2.778vw 0vw 2.778vw;
}
</style>