Vue.component('greeting', {
    template: `
    <div>
      <h1>{{greeting}}</h1>
      <h3>Test H3</h3>
    </div>
    `,
    data() {
        return {
            greeting: 'Hi from vue component'
        }
    }
});