<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import url("http://at.alicdn.com/t/font_1915007_wgj3mg073d.css");
* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: #2f2f2f;
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
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
