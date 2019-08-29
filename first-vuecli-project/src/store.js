import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: [
      {name: 'Apple', stock: 0},{name: 'Orange', stock: 0},{name: 'Banana', stock: 0}
    ]
  },
  mutations: {
    increase(state, index){
      state.fruits[index].stock++;
    },
    decrease(state, index){
      state.fruits[index].stock--;
    },
    reset(state, index){
      state.fruits[index].stock = 0;
    }
  },
  actions: {

  }
})
