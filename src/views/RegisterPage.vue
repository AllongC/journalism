<template>
  <div class="palette">
    <CommonSec />
    <InputSec
      type="text"
      username="username"
      inputText="用户名/手机号码"
      :rule="userRule"
      :errMsg="userErrMsg"
      @leaved="setUser"
    />
    <InputSec
      type="text"
      nickname="nickname"
      inputText="昵称"
      :rule="nickRule"
      :errMsg="nickErrMsg"
      @leaved="setNick"
    />
    <InputSec
      type="password"
      userPwd="userPwd"
      inputText="密码"
      :rule="pwdRule"
      :errMsg="pwdErrMsg"
      @leaved="setPwd"
    />
    <MethodSec />
    <LoginSec logInfo="注册" @send="sendData" />
  </div>
</template>

<script>
import CommonSec from "@/components/CommonSec";
import InputSec from "@/components/InputSec";
import MethodSec from "@/components/MethodSec";
import LoginSec from "@/components/LoginSec";
export default {
  data() {
    return {
      newUser: "",
      newNick: "",
      newPwd: "",
      userRule: "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$",
      pwdRule: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[^]{8,16}$",
      nickRule: "^[\u4E00-\u9FA5A-Za-z0-9_]+$",
      userErrMsg: "手机号码或用户名格式不正确",
      pwdErrMsg: "密码格式不正确",
      nickErrMsg: "昵称格式不正确"
    };
  },
  methods: {
    setUser(newVal) {
      this.newUser = newVal;
    },
    setNick(newVal) {
      this.newNick = newVal;
    },
    setPwd(newVal) {
      this.newPwd = newVal;
    },
    sendData() {
      if (!this.newPwd || !this.newUser || !this.newNick) {
        this.$toast.fail("输入不能为空!");
        return;
      }
      let reg = new RegExp(this.userRule).test(this.newUser);
      if (!reg) {
        this.$toast.fail(this.userErrMsg);
        return;
      }
      reg = new RegExp(this.pwdRule).test(this.newPwd);
      if (!reg) {
        this.$toast.fail(this.pwdErrMsg);
        return;
      }
      reg = new RegExp(this.nickRule).test(this.newNick);
      if (!reg) {
        this.$toast.fail(this.nickErrMsg);
        return;
      }
      this.$axios({
        url: "/register",
        method: "post",
        data: {
          username: this.newUser,
          password: this.newPwd,
          nickname: this.newNick
        }
      }).then(res => {
        const { message } = res.data;
        if (message == "注册成功") {
          this.$toast.success(message);
          setTimeout(() => {
            this.$router.push("/login");
          }, 500);
        }
      });
    }
  },
  components: {
    CommonSec,
    InputSec,
    MethodSec,
    LoginSec
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
}
</style>