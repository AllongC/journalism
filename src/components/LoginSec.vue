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
    height: 60px;
    border: 0px;
    border-radius: 30px;
    outline: none;
    font-size: 18px;
    color: #2f2f2f;
    background-color: white;
  }
  button:hover {
    box-shadow: 1px 1px 10px 1px white;
  }
}
</style>