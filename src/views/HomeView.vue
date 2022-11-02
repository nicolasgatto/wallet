<template>
    <div class="container">
        <div class="title">
            <h6>WALLET</h6>
        </div>
        <div class="center-items">
            <img src="../assets/mainbackground.svg" alt="" class="background">
        </div>
        <b class="text">A BETTER and EASIER way to track your income and expenses</b>
        <router-link to="/" class="btn1">Get Started</router-link>
    </div>
</template>

<script>

</script>

<style scoped>
    .container{
        text-align: center;
    }
    .title{
        letter-spacing: 2px;
        font-family: Poppins;
        color: #7E7E7E;
        margin-top: 100px;
    }
    .center-items{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-height: 100%;
        max-width: 100%;
    }
    .text{position: fixed;
        letter-spacing: 2px;
        font-family: Poppins;
        font-size: 18px;
        color: #FFFFFF;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .btn1{
        letter-spacing: 2px;
        font-family: Poppins;
        position: relative;
        color: #000000;
        background-color: #FFFFFF;
        padding: 0px 60px;
        border-radius: 5px;
        position: fixed;
        left: 50%;
        bottom: 20%;
        transform: translate(-50%, -50%);
    }
</style>