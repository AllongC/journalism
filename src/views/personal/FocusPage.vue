<template>
  <div>
    <CommonTop val="我的关注" />
    <van-tabs v-model="active" background="#979797" title-active-color="#2f2f2f" color="#2f2f2f">
      <van-tab title="关注" title-style="font-size:4.444vw">
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
      <van-tab title="粉丝" title-style="font-size:4.444vw">
        <div class="fs">你还没有粉丝...</div>
      </van-tab>
      <van-tab title="搜索" title-style="font-size:4.444vw">
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
  padding: 2.778vw 0vw 0vw 2.778vw;
  font-size: 4.444vw;
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22.222vw;
    border-bottom: 1px solid #2f2f2f;
    img {
      width: 13.889vw;
      height: 13.889vw;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 2.778vw;
      border: 0.556vw solid #fff;
    }
    .info {
      font-size: 3.333vw;
      .title {
        font-size: 3.889vw;
        margin-bottom: 1.111vw;
        color: #fff;
      }
      .content {
        width: 66.667vw;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .icon-yuandiancaidan {
      text-align: right;
      flex: 1;
      margin: 0vw 2.778vw 0vw 0vw;
      font-size: 4.444vw;
    }
    .upFollows {
      text-align: center;
      flex: 1;
      margin: 0vw 1.111vw 0vw 0vw;
      background-color: #979797;
      color: #fff;
      padding: 1.111vw;
      font-size: 3.889vw;
      border-radius: 5.556vw;
    }
  }
}
.fs {
  display: flex;
  justify-content: center;
  margin-top: 50%;
  font-size: 3.889vw;
  color: #979797;
}
</style>