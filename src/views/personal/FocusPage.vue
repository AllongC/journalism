<template>
  <div class="palette">
    <CommonTop val="关注" />
    <van-tabs v-model="active" background="#979797" title-active-color="#2f2f2f" color="#2f2f2f">
      <van-tab title="关注">
        <div class="outside">
          <div class="user" v-for="item in focusUser" :key="item.id">
            <img v-if="item.head_img" :src="$axios.defaults.baseURL+ item.head_img" alt />
            <img v-else src="@/assets/logo.jpg" alt />
            <div class="info">
              <p class="title">{{item.nickname}}</p>
              <p>北大迎来首个云端毕业礼！ 明年将为2020届毕业生安排专场学位授予仪式</p>
            </div>
            <span class="iconfont icon-yuandiancaidan"></span>
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
  </div>
</template>

<script>
import CommonTop from "@/components/personal/CommonTop";
export default {
  components: {
    CommonTop
  },
  data() {
    return {
      active: 0,
      focusUser: []
    };
  },
  mounted() {
    this.$axios({
      url: "/user_follows",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.focusUser = data;
    });
  }
};
</script>

<style lang="less" scoped>
.palette {
  background-color: #2f2f2f;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  .van-tabs {
    color: rgb(247, 247, 247);
  }
  .outside {
    padding: 10px 0px 0px 10px;
    .user {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
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
        flex: 1;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .title {
          font-size: 16px;
          margin-bottom: 4px;
          color: #fff;
        }
      }
      .icon-yuandiancaidan {
        margin: 0px 0px 0px 10px;
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
}
</style>