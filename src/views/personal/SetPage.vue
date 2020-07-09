<template>
  <div>
    <CommonTop val="我的设置" />
    <div class="delColumn">
      <h2 class="title">点击删除以下频道</h2>
      <div class="items">
        <div
          class="item"
          @click="delArr(index)"
          v-for="(item,index) in delColumn"
          :key="index"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="addColumn">
      <h2 class="title">点击添加以下频道</h2>
      <div class="items">
        <div
          class="item"
          @click="addArr(index)"
          v-for="(item,index) in addColumn"
          :key="index"
        >{{item.name}}</div>
      </div>
    </div>
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
      addColumn: [],
      delColumn: []
    };
  },
  watch: {
    addColumn() {
      localStorage.setItem("addColumn", JSON.stringify(this.addColumn));
      localStorage.setItem("delColumn", JSON.stringify(this.delColumn));
    }
  },
  mounted() {
    const localAddColumn = localStorage.getItem("addColumn");
    const localDelColumn = localStorage.getItem("delColumn");
    if (localAddColumn || localDelColumn) {
      this.addColumn = JSON.parse(localAddColumn);
      this.delColumn = JSON.parse(localDelColumn);
      return;
    }
    this.$axios({
      url: "/category",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.delColumn = data;
    });
  },
  methods: {
    delArr(index) {
      if (this.delColumn.length == 1) {
        return;
      }
      this.addColumn.push(this.delColumn[index]);
      this.delColumn.splice(index, 1);
    },
    addArr(index) {
      this.delColumn.push(this.addColumn[index]);
      this.addColumn.splice(index, 1);
    }
  }
};
</script>

<style lang="less" scoped>
.delColumn {
  padding: 10px;
  .title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #e4e4e4;
    font-weight: normal;
  }
  .items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item {
      margin: 10px 10px;
      padding: 10px 16px;
      border: 1px solid #e4e4e4;
      color: #e4e4e4;
    }
  }
}
.addColumn {
  padding: 10px;
  .title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #e4e4e4;
    font-weight: normal;
  }
  .items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item {
      margin: 10px 10px;
      padding: 10px 16px;
      border: 1px solid #e4e4e4;
      color: #e4e4e4;
    }
  }
}
</style>