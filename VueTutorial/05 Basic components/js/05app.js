Vue.component('greeting', {
  template: '<h1>Hi from vue component</h1>'
})

const app = new Vue({
  el: '#app',
  data: {
    greetings: 'Hi from Vue'
  },
  methods:{

  },
  computed:{
    
  }
})