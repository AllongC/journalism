<template>
  <div>
    <div class="parent">
      <span class="nickname">{{comment.user.nickname}}</span>
      :
      <p class="content">{{comment.content}}</p>
      <p>回复</p>
    </div>
    <parent v-if="comment.parent" :comment="comment.parent" />
  </div>
</template>

<script>
export default {
  props: ["comment"],
  name: "parent"
};
</script>

<style lang="less" scoped>
.parent {
  display: flex;
  font-size: 12px;
  padding: 10px 0px 10px 0px;
  margin-left: 60px;
  background-color: #222;
  span {
    color: rgb(31, 184, 245);
  }
  .nickname {
    margin-right: 4px;
  }
  .content {
    margin-left: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
  }
}
</style>