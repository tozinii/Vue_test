<template>
    <div class="text-center">
        <img id="logo" class="img-fluid" alt="Vue logo" src="@/assets/logo.png" />
        <h1>{{headerTitle}}</h1>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        headerTitle: String
    }
};
</script>
<style scoped>
#logo{
    height: 250px;
    width: 500px;
}
</style>