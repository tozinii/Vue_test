const store = new Vuex.Store({
  state: {
    number: 10,
    students: []
  },
  mutations: {
    increaseNumber(state) {
      state.number++;
    },
    decreaseNumber(state, n) {
      state.number -= n;
    },
    fillStudents(state, studentsAction){
      state.students = studentsAction;
    }
  },
  actions: {
    getStudents: async function ({commit}){
      const data = await fetch('js/data/students.json');
      const students = await data.json();
      commit('fillStudents',students);
    }
  }
});

const app = new Vue({
  el: '#app',
  store: store //or just put store
});