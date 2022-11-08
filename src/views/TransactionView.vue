<template>
    <div class="container">
        <div class="d-flex justify-content-center">
            <div class="title">
                <h6>NEW TRANSACTION</h6>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class="background">
                <img src="../assets/transactionbackground.svg" alt="" class="background">
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class="form">
                <form action="">
                    <div class="amount">
                        <label class="form-label">Amount</label>
                        <input type="number" placeholder="Enter Amount" v-model="amount" id="amount" required />
                    </div>
                    <div class="receiver">
                        <label class="form-label">Receiver Email</label>
                        <input type="email" placeholder="Enter Receiver Email" v-model="receiver" id="receiver" required />
                    </div>
                    <div class="button">
                        <button @click="submit" type="button" class="btn1">Submit</button>
                    </div>
                    <div class="back">
                        <router-link to="/home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#FFFFFF" class="bi bi-x" viewBox="0 0 16 16" color="#7e7e7e">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style scoped>
    .title{
        margin-top: 10%;
        letter-spacing: 2px;
        font-family: Poppins;
        color: #7E7E7E;
    }
    .background{
        width: 152px;
        margin-top: 10%;
    }
    .form{
        margin-top: 30%;
    }
    input{
        font-size: 12;
        width: 100%;
        padding: 10px;
        border: none;
        background: #101010;
        font-family: Poppins;
        color: #7E7E7E;
    }
    input::placeholder{
        font-size: 12px;
    }
    input[type=text]:focus, input[type=password]:focus, input[type=phone]:focus, select:focus {
        background-color: #101010;
        border-radius: 5px;
        outline: none;
    }
    .text{
        letter-spacing: 2px;
        color: #7e7e7e;
        font-family: Poppins;
    }
    .form-label{
        font-size: 12px;
        letter-spacing: 2px;
        color: #7e7e7e;
        font-family: Poppins;
    }
    .button{
        text-align: center;
        margin-top: 10%;
    }
    .btn1{
        padding: 7px 80px;
        font-size: 14px;
        letter-spacing: 2px;
        font-family: Poppins;
        color: #000000;
        background-color: #FFFFFF;
        border-radius: 10px;
    }
    .back{
        margin-top: 20%;
        text-align: center;
    }
</style>