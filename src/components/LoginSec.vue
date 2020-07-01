<template>
  <div class="LoginSec">
    <button @click="tigger">{{logInfo}}</button>
  </div>
</template>

<script>
export default {
  props: ["logInfo"],
  methods: {
    tigger() {
      this.$emit("send");
    }
  }
};
</script>

<style lang="less" scoped>
.LoginSec {
  padding: 0vw 5.556vw 0vw 5.556vw;
  margin-top: 5.556vw;
  button {
    width: 100%;
    height: 16.667vw;
    border: 0vw;
    border-radius: 8.333vw;
    outline: none;
    font-size: 5vw;
    color: #2f2f2f;
    background-color: white;
  }
  button:hover {
    box-shadow: 1px 1px 2.778vw 1px white;
  }
}
</style>