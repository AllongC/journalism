<template>
  <div>
    <p is-link @click="showPopup">展示弹出层</p>
    <van-popup v-model="show" position="right" :style="{ height: '100%' , width:'70%' }"></van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style lang="less" scoped>
.bgc {
  width: 100%;
  height: 100%;
}
</style>