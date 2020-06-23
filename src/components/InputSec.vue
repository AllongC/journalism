<template>
  <div class="inputSec">
    <input type="text" :class="{username:username,userPwd:userPwd}" />
  </div>
</template>

<script>
export default {
  props: ["username", "userPwd"]
};
</script>

<style lang="less" scoped>
.inputSec {
  padding: 0vw 5.556vw 0vw 5.556vw;
  margin-bottom: 2.778vw;
  input {
    text-indent: 12.5vw;
    height: 13.889vw;
    width: 100%;
    border-radius: 6.944vw;
    outline: none;
  }
  .username {
    background: url("../assets/01.png") white no-repeat center left 2.778vw;
  }
  .userPwd {
    background: url("../assets/mima.png") white no-repeat center left 2.778vw;
  }
}
</style>