<template>
    <div class="container">
        <div class="title">
            <h6>WALLET</h6>
        </div>
        <div class="background">
            <img src="../assets/mainbackground.svg" alt="" class="background">
        </div>
        <div class="text-center">
            <b class="text">A BETTER and EASIER way to track your income and expenses</b>
        </div>
        <div class="button">
            <router-link to="/" class="btn1">Get Started</router-link>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .container{
        display: grid; 
        grid-template-columns: 100%; 
        grid-template-rows: 1fr 1fr 1fr; 
        gap: 0px 0px; 
        justify-items: center; 
        align-items: end; 
    }
    .title{
        letter-spacing: 2px;
        font-family: Poppins;
        color: #7E7E7E;
        justify-self: center; 
        align-self: start; 
        grid-area: 1 / 1 / 2 / 2; 
    }
    .background{
        justify-self: center; 
        align-self: start; 
        grid-area: 2 / 1 / 3 / 2; 
    }
    .text-center{
        text-align: center;
        width: 60%;
        justify-self: center; 
        align-self: center; 
        grid-area: 3 / 1 / 4 / 2; 
    }
    .text{
        letter-spacing: 2.5px;
        font-family: Poppins;
        font-size: 16px;
        color: #FFFFFF;
    }
    .button {
        justify-self: center; 
        align-self: end; 
        grid-area: 3 / 1 / 4 / 2; 
    }
    .btn1{
        padding: 7px 80px;
        font-size: 16px;
        letter-spacing: 2px;
        font-family: Poppins;
        color: #000000;
        background-color: #FFFFFF;
        border-radius: 10px;
    }
</style>