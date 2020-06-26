<template>
  <div class="inputSec">
    <input
      :type="type"
      :class="{username:username,userPwd:userPwd}"
      :placeholder="inputText"
      v-model="EditVal"
      @blur="leaved"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      EditVal: "",
      flag: ""
    };
  },
  methods: {
    leaved() {
      if (!this.flag) {
        console.log(this.errMsg);
      }
    }
  },
  props: ["username", "userPwd", "type", "inputText", "rule", "errMsg"],
  watch: {
    EditVal(newVal) {
      this.flag = new RegExp(this.rule).test(newVal);
    }
  }
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
    font-size: 4.444vw;
  }
  .username {
    background: url("../assets/01.png") white no-repeat center left 2.778vw;
  }
  .userPwd {
    background: url("../assets/mima.png") white no-repeat center left 2.778vw;
  }
}
</style>