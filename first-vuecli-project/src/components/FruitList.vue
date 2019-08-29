<template>
    <div>
        <ul class="list-group">
            <li v-for="(fruit, index) in orderFruits"  :key="fruit.id"  class="list-group-item d-flex justify-content-between align-items-center">
                <div class="justify-content-start">
                    {{index}} - {{fruit.name}}
                    <span class="badge badge-primary badge-pill">Stock: {{fruit.stock}}</span>
                </div>
                <div class="edit-buttons justify-content-between d-flex">
                    <button @click="reset(index)" class="btn btn-warning"><i class="fa fa-repeat" aria-hidden="true"></i></button>
                    <button @click="decrease(index)" class="btn btn-danger"><i class="fa fa-minus" aria-hidden="true"></i></button>
                    <button @click="increase(index)" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i></button>
                </div>
                
            </li>
        </ul>
    </div>
</template>
<script>

    import {mapState, mapMutations} from 'vuex';
    export default {
        name: 'FruitList',
        computed:{
            ...mapState(['fruits']),
            orderFruits(){
                return this.fruits.sort((a, b) => b.stock - a.stock);
            }
        },
        methods:{
            ...mapMutations(['increase', 'decrease', 'reset'])
        }
    };
</script>
<style scoped>
    .edit-buttons{
        width: 12%;
    }
</style>