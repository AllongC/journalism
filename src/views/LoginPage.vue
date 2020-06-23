<template>
  <div class="palette">
    <CommonSec />
    <inputSec username="username" />
    <inputSec userPwd="userPwd" />
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