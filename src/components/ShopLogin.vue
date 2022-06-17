<template>
  <div class="login">
    <div>
      <input v-model="id" placeholder="ID" />
    </div>
    <div>
      <input v-model="pw" placeholder="PW" />
    </div>
    <button disabled @click="setLogin">로그인</button>
  </div>
</template>

<script>
export default {
  name: "ShopLogin",

  data() {
    return {
      id: "",
      pw: "",
      validation: "true",
      mypageShow: false,
    };
  },

  watch: {
    login() {
      console.log(this.login);
    },
  },

  updated() {
    this.id.length > 0 && this.pw.length > 0
      ? (this.validation = "false")
      : (this.validation = "true");
  },
  methods: {
    setLogin() {
      console.log("click");
    },
  },
};
</script>

<style>
#login {
  display: flex;
  width: 1280px;
  margin: auto;
}

input {
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
}

button {
  width: 100px;
  height: 30px;
  background-color: black;
  color: white;
}
</style>
