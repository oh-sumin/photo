<template>
  <div id="photoList">
    <router-link
      tag="div"
      :to="{ name: 'PhotoList', params: { id: item.id, item } }"
      class="listBox"
      v-for="item in items"
      :key="item.id"
    >
      <img :src="`${item.img}`" />
      <div>
        <h1>{{ item.name }}</h1>
        <p>price : {{ item.price }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PhotoList",

  data() {
    return {
      items: [],
    };
  },

  created() {
    axios.get("/data/photoList.json").then((res) => {
      this.items = res.data;
      console.log(this.items);
    });
  },
};
</script>

<style>
#photoList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.listBox {
  margin: 20px;
}

.info {
  margin: 20px;
}
img {
  width: 350px;
  height: 400px;
}
</style>
