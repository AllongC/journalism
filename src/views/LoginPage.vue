<template>
  <div class="palette">
    <CommonSec />
    <inputSec
      type="text"
      username="username"
      inputText="用户名/手机号码"
      rule="^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$"
      errMsg="手机号码或用户名格式不正确"
    />
    <inputSec
      type="password"
      userPwd="userPwd"
      inputText="密码"
      rule="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$"
      errMsg="密码格式不正确"
    />
    <MethodSec />
    <LoginSec />
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