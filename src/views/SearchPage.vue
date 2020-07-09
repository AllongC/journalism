<template>
  <div class="search">
    <div class="searchTop">
      <span class="iconfont icon-xiazai6" @click="goback"></span>
      <div class="middle">
        <span class="iconfont icon-yuyin1"></span>
        <input type="text" placeholder="关键词" v-model="keyword" />
      </div>
      <p @click="searchKeyword">搜索</p>
    </div>
    <div class="outside" v-if="!result.length&&isShow">
      <div class="history">
        <h2>
          <span class="iconfont icon-lishijilu-copy"></span>历史记录
        </h2>
        <div class="item">
          <p
            class="items"
            v-for="(item,index) in record"
            :key="index"
            @click="clickHistory(item)"
          >{{item}}</p>
        </div>
      </div>
      <div class="hot">
        <h2>
          <span class="iconfont icon-resou1"></span>热搜榜
        </h2>
        <div class="item">
          <p class="items" v-for="(item,index) in hots" :key="index" @click="clickHots(item)">
            {{item}}
            <span class="iconfont icon-xiangshang"></span>
          </p>
        </div>
      </div>
    </div>
    <div class="noneSearch" v-if="!result.length&&!isShow">
      <van-empty :description="'没找到关于 “'+keyword+'” 的内容'" />
    </div>
    <Post :post="post" :index="index" v-for="(post,index) in  result" :key="post.id" />
  </div>
</template>

<script>
import Post from "@/components/Post";
export default {
  components: {
    Post
  },
  data() {
    return {
      record: [],
      hots: ["关晓彤", "美女", "张信哲", "王祖贤"],
      keyword: "",
      result: [],
      isShow: true
    };
  },
  watch: {
    keyword() {
      if (this.keyword == "") {
        this.result = [];
        this.isShow = true;
      }
    },
    record() {
      localStorage.setItem("record", JSON.stringify(this.record));
    }
  },
  mounted() {
    if (localStorage.getItem("record")) {
      const newRecord = localStorage.getItem("record");
      this.record = JSON.parse(newRecord);
    }
  },
  methods: {
    goback() {
      if (!this.keyword) {
        this.$router.back();
      }
      this.keyword = "";
    },
    searchKeyword() {
      this.$axios({
        url: "/post_search",
        method: "get",
        params: {
          keyword: this.keyword
        }
      }).then(res => {
        if (this.record.indexOf(this.keyword) == -1) {
          this.record.push(this.keyword);
        }
        const { data } = res.data;
        this.result = data;
        if (this.result.length == 0) {
          this.isShow = false;
        }
      });
    },
    clickHots(val) {
      this.keyword = val;
      this.searchKeyword();
    },
    clickHistory(val) {
      this.keyword = val;
      this.searchKeyword();
    }
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
  margin: 0vw 2.778vw;
  margin-top: 1.667vw;
  padding: 1.667vw;
  .middle {
    position: relative;
    flex: 1;
    margin: 0 2.778vw;
    span {
      top: 1.667vw;
      left: 3.333vw;
      font-size: 4.444vw;
      position: absolute;
      color: #979797;
    }
    input {
      text-indent: 11.111vw;
      width: 100%;
      background-color: #4f4f4f;
      color: #979797;
      border: none;
      height: 8.333vw;
      border-radius: 4.167vw;
    }
  }
}
.history {
  color: rgb(236, 233, 233);
  margin-top: 2.778vw;
  padding: 2.778vw;
  border-bottom: 1px solid rgb(82, 81, 81);
  .icon-lishijilu-copy {
    margin-right: 1.667vw;
    font-size: 3.889vw;
  }
  h2 {
    font-size: 3.889vw;
    font-weight: normal;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    .items {
      margin: 3.889vw 0vw 3.889vw 1.667vw;
      padding: 1.667vw;
      font-size: 3.333vw;
    }
  }
}
.hot {
  color: rgb(236, 233, 233);
  margin-top: 2.778vw;
  padding: 2.778vw;
  .icon-resou1 {
    color: red;
    margin-right: 1.667vw;
    font-size: 3.889vw;
  }
  h2 {
    font-size: 3.889vw;
    font-weight: normal;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    .items {
      margin: 5.556vw 0vw 3.889vw 8.333vw;
      width: 40%;
      font-size: 3.333vw;
      .icon-xiangshang {
        color: red;
        font-size: 3.333vw;
      }
    }
  }
}
.noneSearch {
  text-align: center;
  margin-top: 41.667vw;
  font-size: 3.889vw;
}
</style>