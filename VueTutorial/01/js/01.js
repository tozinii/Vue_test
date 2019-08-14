const app = new Vue({
  el: '#app',
  data: {
    title: 'Testing Vuejs',
    cars: [ {brand: 'ferrari', fuel: false},
            {brand: 'seat', fuel: true},
            {brand: 'ford', fuel: true} 
  ],
    newCarBrand: '',
    newCarFuel: false,
    delCarIndex: ''
  },
  methods:{
    addNewCar(){
      this.cars.push({
        brand: this.newCarBrand, fuel: this.newCarFuel
      });
      console.log('añadido ' + this.newCarBrand + ' ' + this.newCarFuel);
    },

    deleteCar(index){
      this.cars.splice(index,1);
      console.log('Borrado ' + index + ' de la lista.');
    }
  }
})
