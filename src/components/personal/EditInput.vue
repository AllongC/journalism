<template>
  <div class="editInput" @click="editInfo">
    <p>{{name}}</p>
    <p class="info">{{val}}</p>
    <span class="iconfont icon-jiantou"></span>
  </div>
</template>

<script>
export default {
  props: ["name", "val"],
  methods: {
    editInfo() {
      this.$emit("editInfo");
    }
  }
};
</script>

<style lang="less" scoped>
.editInput {
  display: flex;
  height: 16.667vw;
  justify-content: center;
  align-items: center;
  padding: 0vw 2.222vw;
  color: white;
  border-bottom: 1px dashed #2f2f2f;
  .info {
    flex: 1;
    text-align: right;
    margin-right: 1.667vw;
  }
}
</style>