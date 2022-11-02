<template>
    <div class="container">
        <div class="d-flex justify-content-center">
            <div class="title">
                <h6>WALLET</h6>
            </div>
        </div>
        <div class="back-text">
            <div class="d-flex justify-content-center">
                <div class="background">
                    <img src="../assets/mainbackground.svg" alt="" class="background">
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <b class="text">A BETTER and EASIER way to track your income and expenses</b>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <router-link to="/login"><button class="btn1">Get Started</button></router-link>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .container{
        
    }
    .title{
        margin-top: 20%;
        letter-spacing: 2px;
        font-family: Poppins;
        color: #7E7E7E;
    }
    .back-text{
        margin-top: 25%;
    }
    .text{
        text-align: center;
        margin-top: 15%;
        letter-spacing: 2.5px;
        font-family: Poppins;
        font-size: 16px;
        color: #FFFFFF;
    }
    .btn1{
        margin-top: 40%;
        padding: 7px 80px;
        font-size: 16px;
        letter-spacing: 2px;
        font-family: Poppins;
        color: #000000;
        background-color: #FFFFFF;
        border-radius: 10px;
    }
</style>