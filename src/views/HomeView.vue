<template>
    <div class="container">
        <NavBar/>
        <Balance/>
        <div class="d-flex justify-content-center">
            <img src="../assets/lobster.jpg" alt="">
        </div>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    import Balance from '../components/Balance.vue'

    export default{
        components: {NavBar, Balance}
    }
</script>

<style scoped>

</style>