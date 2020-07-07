<template>
  <div class="Comment">
    <div class="user">
      <img v-if="comment.user.head_img" :src="$axios.defaults.baseURL+comment.user.head_img" alt />
      <img v-else src="@/assets/logo.jpg" alt />
      <div class="info">
        <p class="nickname">{{comment.user.nickname}}</p>
        <p class="time">{{comment.create_date.split('T')[0]}}</p>
        <p class="cotent">{{comment.content}}</p>
      </div>
      <p class="replace">回复</p>
    </div>
    <parent v-if="comment.parent" :comment="comment.parent" />
  </div>
</template>

<script>
import parent from "@/components/Comment/parent";
export default {
  props: ["comment"],
  components: {
    parent
  }
};
</script>

<style lang="less" scoped>
.Comment {
  color: white;
  padding-bottom: 2.778vw;
  border-bottom: 1px solid #444;
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.778vw 0vw 0vw 0vw;
    img {
      width: 13.889vw;
      height: 13.889vw;
      object-fit: cover;
      border-radius: 50%;
    }
    .info {
      flex: 1;
      margin-left: 2.778vw;
      .nickname {
        font-size: 3.333vw;
        color: #979797;
      }
      .time {
        font-size: 2.778vw;
        color: #979797;
      }
      .cotent {
        margin-top: 1.111vw;
        font-size: 3.889vw;
      }
    }
    .replace {
      font-size: 3.889vw;
      margin-right: 1.667vw;
    }
  }
}
</style>