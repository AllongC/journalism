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
    <div class="noneSearch" v-if="!result.length&&!isShow">没找到关于 ‘{{keyword}}’ 的内容</div>
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
  border-bottom: 1px solid rgb(82, 81, 81);
  .icon-lishijilu-copy {
    margin-right: 6px;
    font-size: 14px;
  }
  h2 {
    font-size: 14px;
    font-weight: normal;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    .items {
      margin: 14px 0px 14px 6px;
      padding: 6px;
      font-size: 12px;
    }
  }
}
.hot {
  color: rgb(236, 233, 233);
  margin-top: 10px;
  padding: 10px;
  .icon-resou1 {
    color: red;
    margin-right: 6px;
    font-size: 14px;
  }
  h2 {
    font-size: 14px;
    font-weight: normal;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    .items {
      margin: 20px 0px 14px 6px;
      width: 44%;
      font-size: 12px;
      .icon-xiangshang {
        color: red;
        font-size: 12px;
      }
    }
  }
}
.noneSearch {
  text-align: center;
  margin-top: 200px;
  font-size: 14px;
}
</style>