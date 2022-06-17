import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // state : 컴포넌트간 공유할 data 객체
  state: {
    mypage: true,
  },
  // getters : 공유하는 data 전달 혹은 가공하여 전달
  getters: {},
  //저장소에 공유되어 있는 data 가공, 상태 재 변경,
  mutations: {},
  //비동기 작업 처리할 때 사용
  actions: {},
});
