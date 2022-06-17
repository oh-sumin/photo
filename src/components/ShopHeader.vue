<template>
  <div id="header">
    <div class="photo">Photo</div>
    <router-link tag="div" :to="'/'" class="tap">Home</router-link>
    <router-link tag="div" :to="'/mypage'" class="tap">Mypage</router-link>
  </div>
</template>

<style>
#header {
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  height: 90px;
}

.photo {
  margin: 0px 20px 0px 20px;
  font-size: 40px;
  font-weight: 600;
}

.tap {
  margin-left: 20px;
  font-size: 20px;
}

.tap:hover {
  border-bottom: 1px solid white;
}
</style>
