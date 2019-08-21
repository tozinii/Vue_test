Vue.component('son',{
    template: //html
    `
    <div class="p-5 bg-success">
        <h4>Son component: {{number}}</h4>
    </div>
    `,
    props: ['number']
})