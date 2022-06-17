<template>
  <div id="detail">
    <img :src="`/${$route.params.item.img}`" />
    <h1>{{ $route.params.item.name }}</h1>
    <h1>{{ $route.params.item.price }}</h1>
  </div>
</template>

<script>
export default {
  name: "PhotoDetail",
};
</script>

<style>
#detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
