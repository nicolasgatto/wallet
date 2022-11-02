<template>
    <div class="container">
        <div class="title">
            <h6>LOGIN</h6>
        </div>
        <div class="background">
            <img src="../assets/loginbackground.svg" alt="" class="background">
        </div>
        <div class="login-form">
            <form action="">
                <div class="email">
                    <label class="form-label">Email</label>
                    <input type="text" placeholder="Enter Email" required />
                </div>
                <div class="password">
                    <label class="form-label">Password</label>
                    <input type="password" placeholder="Enter Password" minlength="8" maxlength="32" required />
                </div>
                <router-link to="/">
                    <div class="forgot-pass">
                        <label class="text">
                            Forgot Password
                        </label>
                    </div>
                </router-link>
                <div class="button">
                    <button type="submit" class="btn1">Log In</button>
                </div>
                <div class="register">
                    <p class="text">Don’t have an account yet? <router-link to="/"><span class="regis-span">Register</span></router-link></p>
                </div>
                <div class="back">
                    <router-link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" color="#7e7e7e">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .title{
        letter-spacing: 2px;
        font-family: Poppins;
        color: #7E7E7E;
    }
    input{
        width: 100%;
        padding: 10px;
        border: none;
        background: #090909;
        font-family: Poppins;
        color: #7E7E7E;
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
        font-size: 10px;
        letter-spacing: 2px;
        color: #7e7e7e;
        font-family: Poppins;
    }
    .forgot-pass{
        font-size: 10px;
    }
    .btn1{
        padding: 7px 80px;
        font-size: 12px;
        letter-spacing: 2px;
        font-family: Poppins;
        color: #000000;
        background-color: #FFFFFF;
        border-radius: 10px;
    }
    .register{
        font-size: 12px;
    }
    .regis-span{
        color: #FFFFFF;
    }
</style>