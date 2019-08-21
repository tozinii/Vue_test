Vue.component('son', {
    template: //html
    `
    <div>
        <button @click="$store.commit('increaseNumber')">+</button>
    </div>
    `
    });