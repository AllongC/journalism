<template>
  <div>
    <button @click="addFocus(1)">用户1</button>
    <button @click="addFocus(2)">用户2</button>
    <button @click="addFocus(3)">用户3</button>
    <button @click="addFocus(4)">用户4</button>
    <button @click="addFocus(5)">用户5</button>
    <button @click="addFocus(6)">用户6</button>
    <button @click="addFocus(7)">用户7</button>
    <button @click="addFocus(8)">用户8</button>
    <button @click="addFocus(9)">用户9</button>
    <button @click="addFocus(10)">用户10</button>
  </div>
</template>

<script>
export default {
  methods: {
    addFocus(id) {
      this.$axios({
        url: "/user_follows/" + id
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>