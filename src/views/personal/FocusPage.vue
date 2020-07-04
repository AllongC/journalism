<template>
  <div>
    <CommonTop val="关注" />
    <van-tabs v-model="active" background="#979797" title-active-color="#2f2f2f" color="#2f2f2f">
      <van-tab title="关注">
        <div class="outside">
          <div class="user" v-for="(item,index) in focusUser" :key="item.id">
            <img v-if="item.head_img" :src="$axios.defaults.baseURL+ item.head_img" alt />
            <img v-else src="@/assets/logo.jpg" alt />
            <div class="info">
              <p class="title">{{item.nickname}}</p>
              <p class="content">北大迎来首个云端毕业礼！ 明年将为2020届毕业生安排专场学位授予仪式</p>
            </div>
            <span
              v-if="item.isFocus"
              @click="unFollows({id:item.id,index:index})"
              class="iconfont icon-yuandiancaidan"
            ></span>
            <p @click="upFollows(index)" class="upFollows" v-else>关注</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="粉丝">
        <div class="fs">你还没有粉丝...</div>
      </van-tab>
      <van-tab title="搜索">
        <div class="outside">搜索</div>
      </van-tab>
    </van-tabs>
    <van-action-sheet
      @select="select"
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
    />
  </div>
</template>

<script>
import CommonTop from "@/components/personal/CommonTop";
export default {
  components: {
    CommonTop
  },
  methods: {
    unFollows(item) {
      this.show = true;
      this.userId = item.id;
      this.currentId = item.index;
    },
    upFollows(index) {
      this.$axios({
        url: "/user_follows/" + this.focusUser[index].id
      }).then(res => {
        const { message } = res.data;
        if (message == "关注成功") {
          this.focusUser[this.currentId].isFocus = true;
        }
      });
    },
    select(item) {
      if (item.name == "取消关注" && this.userId) {
        this.$axios({
          url: "/user_unfollow/" + this.userId
        }).then(res => {
          const { message } = res.data;
          if (message == "取消关注成功") {
            this.focusUser[this.currentId].isFocus = false;
          }
        });
      }
    }
  },
  data() {
    return {
      active: 0,
      focusUser: [],
      userId: "",
      currentId: "",
      show: false,
      actions: [{ name: "取消关注" }, { name: "查看用户" }]
    };
  },
  mounted() {
    this.$axios({
      url: "/user_follows",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.focusUser = data.map(item => {
        return {
          ...item,
          isFocus: true
        };
      });
      console.log(this.focusUser);
    });
  }
};
</script>

<style lang="less" scoped>
.van-tabs {
  color: rgb(247, 247, 247);
}
.outside {
  padding: 10px 0px 0px 10px;
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #2f2f2f;
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 10px;
      border: 2px solid #fff;
    }
    .info {
      font-size: 12px;
      .title {
        font-size: 14px;
        margin-bottom: 4px;
        color: #fff;
      }
      .content {
        width: 240px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .icon-yuandiancaidan {
      text-align: right;
      flex: 1;
      margin: 0px 10px 0px 0px;
    }
    .upFollows {
      text-align: center;
      flex: 1;
      margin: 0px 4px 0px 0px;
      background-color: #979797;
      color: #fff;
      padding: 4px;
      font-size: 14px;
      border-radius: 20px;
    }
  }
}
.fs {
  display: flex;
  justify-content: center;
  margin-top: 50%;
  font-size: 14px;
  color: #979797;
}
</style>