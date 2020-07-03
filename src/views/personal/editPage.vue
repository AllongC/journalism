<template>
  <div class="palette">
    <div class="edit">
      <div class="headeImg">
        <div class="mask">修改</div>
        <img v-if="userInfo.head_img" :src="$axios.default.baseURL+ userInfo.head_img" alt />
        <img v-else src="@/assets/logo.jpg" alt />
      </div>
    </div>
    <div class="userInfo">
      <EditInput name="昵称" :val="userInfo.nickname" />
      <EditInput name="性别" :val="userInfo.gender==1?'男':'女'" />
      <EditInput name="用户名" :val="userInfo.username" />
      <EditInput name="密码" val="******" />
      <EditInput name="设置" val />
    </div>
    <p>完成</p>
  </div>
</template>

<script>
import EditInput from "@/components/personal/EditInput";
export default {
  components: {
    EditInput
  },
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {
    this.$axios({
      url: "/user/" + this.$route.params.id,
      method: "get"
    }).then(res => {
      const { data, message } = res.data;
      if (message == "获取成功") {
        this.userInfo = data;
        console.log(this.userInfo);
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
}
.edit {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  .headeImg {
    position: relative;
    width: 19.444vw;
    height: 19.444vw;
    border-radius: 50%;
    overflow: hidden;
    .mask {
      position: absolute;
      bottom: 0;
      height: 40%;
      width: 100%;
      line-height: 200%;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      color: white;
      font-size: 12px;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.userInfo {
  background-color: rgba(255, 255, 255, 0.5);
  margin: 10px;
  border-radius: 14px;
}
p {
  height: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 20px 10px 10px 10px;
  border-radius: 14px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style>