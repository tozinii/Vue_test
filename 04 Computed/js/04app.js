const app = new Vue({
  el: '#app',
  data: {
    message: 'Test de computed',
    contador: '0'
  },
  computed:{
    invert(){
      return this.message.split('').reverse().join('');
    },
    color(){
      return {
        'bg-success' : this.contador <= 10,
        'bg-warning' : this.contador > 10 && this.contador < 20,
        'bg-danger' : this.contador >= 20
      }
    }
  }
})