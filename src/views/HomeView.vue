<template>
    <div class="container">
        <NavBar/>
        <Balance/>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import Balance from '../components/Balance.vue'

    export default{
        components: {NavBar, Balance},
    }
</script>

<style scoped>
    
</style>