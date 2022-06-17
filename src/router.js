import Vue from "vue";
import createRouter from "vue-router";
import PhotoList from "./components/PhotoList";
import PhotoDetail from "./components/PhotoDetail";
import MyPage from "./components/MyPage";
import ShopLogin from "./components/ShopLogin";

Vue.use(createRouter);

const router = new createRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: PhotoList,
    },
    {
      path: "/detail/:id",
      name: "PhotoList",
      component: PhotoDetail,
      props: true,
    },
    {
      path: "/mypage",
      name: "MyPage",
      component: MyPage,
    },
    {
      path: "/login",
      name: "ShopLogin",
      component: ShopLogin,
    },
  ],
});

export default router;
