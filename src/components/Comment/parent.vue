<template>
  <div>
    <div class="parent">
      <span class="nickname">{{comment.user.nickname}}</span>
      :
      <p class="content">{{comment.content}}</p>
      <p @click="sendId">回复</p>
    </div>
    <parent v-if="comment.parent" :comment="comment.parent" @parentId="getId" />
  </div>
</template>

<script>
export default {
  props: ["comment"],
  name: "parent",
  methods: {
    sendId() {
      this.$emit("parentId", this.comment.id);
    },
    getId(id) {
      this.$emit("parentId", id);
    }
  }
};
</script>

<style lang="less" scoped>
.parent {
  display: flex;
  font-size: 3.333vw;
  padding: 2.778vw 0vw 2.778vw 0vw;
  margin-left: 16.667vw;
  background-color: #222;
  span {
    color: rgb(31, 184, 245);
  }
  .nickname {
    margin-right: 1.111vw;
  }
  .content {
    margin-left: 1.111vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 55.556vw;
  }
}
</style>