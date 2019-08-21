Vue.component('son', {
    template: //html
        `
    <div>
        <button @click="increaseNumber">+</button>
        <button @click="decreaseNumber(2)">-</button>
    </div>
    `,
    methods: {
        ...Vuex.mapMutations(['increaseNumber', 'decreaseNumber']) //mapping mutations from store mutations
    }
});