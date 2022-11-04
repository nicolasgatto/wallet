<template>
    <div class="container">
        <div class="d-flex justify-content-center">
            <div class="title">
                <h6>FORGOT PASSWORD</h6>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class="background">
                <img src="../assets/forgotpassbackground.svg" alt="" class="background">
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class="form">
                <form action="">
                    <div class="email">
                        <label class="form-label">Email</label>
                        <input type="text" placeholder="Enter Email" required />
                    </div>
                    <div class="button">
                        <button type="submit" class="btn1">Send Link</button>
                    </div>
                    <div class="back">
                        <router-link to="/login">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 19L5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

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
        margin-top: 60%;
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
    .form-label{
        font-size: 12px;
        letter-spacing: 2px;
        color: #7e7e7e;
        font-family: Poppins;
    }
    .button{
        text-align: center;
        margin-top: 15%;
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
        margin-top: 17%;
        text-align: center;
    }
</style>