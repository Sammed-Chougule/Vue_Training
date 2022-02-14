import { createStore } from "vuex";

export default createStore({
  state: {
    token:"",
    users: [],
    currUser: {}
  },
  mutations: {
    saveToken(state,payload){
      state.token=payload;
    },
    register(state, payload) {
      state.users.push(payload);
      state.currUser = payload;
    }
  },
  actions: {
    login(context){
      // console.log("userName")
      return new Promise(resolve=>{
        setTimeout(()=>{
          context.commit("saveToken","secretToken");
          resolve();
        },1000);
        
      })
      
    },
    register(context, payload) {
      return new Promise(resolve => {
        context.commit('register', payload);
        resolve();
      })
    }
  },
  getters:{getToken(state){
  return state.token;
  }

  },
  modules: {},
});
