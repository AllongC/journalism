<template>
  <div>个人中心</div>
</template>

<script>
export default {
  mounted() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId")
    }).then(res => {
      const { message } = res.data;
      console.log(res);
      console.log(message);
    });
  }
};
</script>

<style lang="less" scoped>
</style>