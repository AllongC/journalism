<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import url("http://at.alicdn.com/t/font_1915007_gy8dgyoe5zw.css");
* {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: none;
}

ul,
li,
ol {
  list-style: none;
}
.clearfix:after {
  content: "";
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}
</style>
