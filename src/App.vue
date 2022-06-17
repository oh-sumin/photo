<template>
  <div id="app">
    <ShopHeader></ShopHeader>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ShopHeader from "../src/components/ShopHeader.vue";

export default {
  name: "App",
  components: {
    ShopHeader,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0px;
} */

#content {
  margin: 60px auto;
  width: 1280px;
}
</style>
