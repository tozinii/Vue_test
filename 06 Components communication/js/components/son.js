Vue.component('son',{
    template: //html
    `
    <div class="p-5 bg-success">
        <h4>Son component: {{number}}</h4>
        <h4>Name: {{name}}</h4>
    </div>
    `,
    props: ['number'],
    data(){
        return{
            name: 'Iker'
        }
    },
    mounted(){
        this.$emit('nameSon', this.name);
    }
})