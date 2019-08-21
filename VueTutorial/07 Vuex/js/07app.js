const store = new Vuex.Store({
  state: {
    number: 10
  },
  mutations: {
    increaseNumber(){
      this.state.number++;
    }
  }
});

const app = new Vue({
  el: '#app',
  store: store //or just put store
});