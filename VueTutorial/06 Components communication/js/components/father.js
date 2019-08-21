Vue.component('father', {
    template: //html 
    `
    <div class="p-5 bg-dark text-white">
        <h2>Father component: {{fatherNumber}}</h2>
        <button class="btn btn-success" @click="fatherNumber++">+</button>
        <button class="btn btn-danger" @click="fatherNumber--">-</button>
        <son :number="fatherNumber+2"></son>
    </div>
    `,
    data(){
        return{
            fatherNumber: 0
        }
    }
})