<template>
  <div id="app" class="container">
    <Header headerTitle="Fruit list"></Header>
    <FruitList></FruitList>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import FruitList from "./components/FruitList.vue";
  export default {
    name: "app",
    components: {
      Header,
      FruitList
    }
  };
</script>