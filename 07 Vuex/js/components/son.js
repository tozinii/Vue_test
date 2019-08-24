Vue.component('son', {
    template: //html
        `
    <div>
        <button @click="increaseNumber">+</button>
        <button @click="decreaseNumber(2)">-</button>
        <button @click="getStudents">Get students</button>

        
        <ul v-for="student of students">
            <li>{{student.name}}</li>
            <li>{{student.surname}}</li>
            <li>{{student.age}}</li>
        </ul>
    </div>
    `,
    computed:{
        ...Vuex.mapState(['students'])
    },
    methods: {
        ...Vuex.mapMutations(['increaseNumber', 'decreaseNumber']), //mapping mutations from store mutations
        ...Vuex.mapActions(['getStudents']) //mapping actions from store actions
    }
});