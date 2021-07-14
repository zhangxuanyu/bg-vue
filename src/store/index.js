import {createStore} from 'vuex'


const store = createStore({
  state: {
    name: "",
    userInfo: {},
    userType:"",
    pid:null
  },
  mutations: {
    change(state, name) {
      state.name = name;
    },
    changeUserInfo(state, value) {
      state.userInfo = value;
      state.userType = value.user_type;
    },
    getPid(state, id) {
      state.pid = id;
    },
  }
});
export default store;

