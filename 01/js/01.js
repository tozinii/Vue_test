const app = new Vue({
  el: '#app',
  data: {
    title: 'Testing Vuejs',
    cars: [ {brand: 'ferrari', fuel: false},
            {brand: 'seat', fuel: false},
            {brand: 'ford', fuel: true},
            {brand: 'audi', fuel: true},
            {brand: 'skoda', fuel: false},
            {brand: 'land rover', fuel: true},
            {brand: 'jeep', fuel: false},
            {brand: 'lexus', fuel: true},
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
      this.newCarBrand = '';
      this.newCarFuel = false;
    },

    deleteCar(index){
      this.cars.splice(index,1);
      console.log('Borrado ' + index + ' de la lista.');
      this.delCarIndex = '';
    }
  }
})
