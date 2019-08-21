const store = new Vuex.Store({
  state: {
    number: 10
  },
  mutations: {
    increaseNumber(state) {
      state.number++;
    },
    decreaseNumber(state, n) {
      state.number -= n;
    }
  }
});

const app = new Vue({
  el: '#app',
  store: store //or just put store
});