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
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#FFFFFF" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
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