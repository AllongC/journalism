<template>
  <div class="editInput">
    <p>{{name}}</p>
    <p class="info">{{val}}</p>
    <span class="iconfont icon-jiantou"></span>
  </div>
</template>

<script>
export default {
  props: ["name", "val"]
};
</script>

<style lang="less" scoped>
.editInput {
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  color: white;
  border-bottom: 1px dashed #2f2f2f;
  .info {
    flex: 1;
    text-align: right;
    margin-right: 6px;
  }
}
</style>