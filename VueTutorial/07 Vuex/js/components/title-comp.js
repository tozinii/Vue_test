Vue.component('title-comp', {
    template: //html
        `
        <div>
            <h1>Numero: {{number}}</h1>
            <son></son>
        </div>
        `,
    computed: {
        ...Vuex.mapState(['number']) //mapping number variable from Vuex store
    }
});