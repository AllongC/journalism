<template>
  <div class="search">
    <div class="searchTop">
      <span class="iconfont icon-xiazai6" @click="$router.back()"></span>
      <div class="middle">
        <span class="iconfont icon-yuyin1"></span>
        <input type="text" placeholder="关键词" />
      </div>
      <p>搜索</p>
    </div>
    <div class="history">
      <h2>历史记录</h2>
      <div class="item">
        <p class="items" v-for="(item,index) in record" :key="index">{{item}}</p>
      </div>
    </div>
    <div class="hot">
      <h2>热搜榜</h2>
      <div class="item">
        <p class="items" v-for="(item,index) in hots" :key="index">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      record: ["关晓彤", "美女", "张信哲", "王祖贤"],
      hots: ["关晓彤", "美女", "张信哲", "王祖贤"]
    };
  }
};
</script>

<style lang="less" scoped>
.search {
  color: #979797;
}
.searchTop {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
  margin-top: 6px;
  padding: 6px;
  .middle {
    position: relative;
    flex: 1;
    margin: 0 10px;
    span {
      top: 6px;
      left: 12px;
      font-size: 16px;
      position: absolute;
      color: #979797;
    }
    input {
      text-indent: 40px;
      width: 100%;
      background-color: #4f4f4f;
      color: #979797;
      border: none;
      height: 30px;
      border-radius: 15px;
    }
  }
}
.history {
  color: rgb(236, 233, 233);
  margin-top: 10px;
  padding: 10px;
  h2 {
    font-size: 16px;
    font-weight: normal;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    .items {
      margin: 14px 0px 14px 6px;
      padding: 6px;
      font-size: 14px;
    }
  }
}
.hot {
  color: rgb(236, 233, 233);
  margin-top: 10px;
  padding: 10px;
  h2 {
    font-size: 16px;
    font-weight: normal;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    .items {
      margin: 20px 0px 14px 6px;
      width: 44%;
      font-size: 14px;
    }
  }
}
</style>