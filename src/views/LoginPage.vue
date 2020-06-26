<template>
  <div class="palette">
    <CommonSec />
    <inputSec
      type="text"
      username="username"
      inputText="用户名/手机号码"
      :rule="userRule"
      :errMsg="userErrMsg"
      @leaved="setUser"
    />
    <inputSec
      type="password"
      userPwd="userPwd"
      inputText="密码"
      :rule="pwdRule"
      :errMsg="pwdErrMsg"
      @leaved="setPwd"
    />
    <MethodSec />
    <LoginSec logInfo="登录" @send="sendData" />
  </div>
</template>

<script>
import inputSec from "@/components/InputSec";
import LoginSec from "@/components/LoginSec";
import CommonSec from "@/components/CommonSec";
import MethodSec from "@/components/MethodSec";
export default {
  components: {
    inputSec,
    LoginSec,
    CommonSec,
    MethodSec
  },
  data() {
    return {
      newUser: "",
      newPwd: "",
      userRule: "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$",
      pwdRule: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[^]{8,16}$",
      userErrMsg: "手机号码或用户名格式不正确",
      pwdErrMsg: "密码格式不正确"
    };
  },
  methods: {
    setUser(newVal) {
      this.newUser = newVal;
    },
    setPwd(newVal) {
      this.newPwd = newVal;
    },
    sendData() {
      if (!this.newPwd || !this.newUser) {
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
      this.$axios({
        url: "/login",
        method: "post",
        data: {
          username: this.newUser,
          password: this.newPwd
        }
      }).then(res => {
        console.log(res);
        const { message, data } = res.data;
        if (message == "登录成功") {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user.id);
          this.$toast.success(message);
          setTimeout(() => {
            this.$router.push("/center");
          }, 500);
        }
      });
    }
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