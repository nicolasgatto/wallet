<template>
    <div class="container">
        <div class="d-flex justify-content-center">
            <div class="profile-title">
                <h6>PROFILE</h6>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class="border-circle">
                <div class="profile-pic">

                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <div class="name">
                Prueba nombre
            </div>
        </div>
        <div class="profile-options">
            <div>
                <h6 class="subhead-profile">PROFILE</h6>
            </div>
            <div class="d-flex flex-column mb-3 options-menu">
                <span class="p-2">Change Password</span>
                <span class="p-2">Light / Dark Mode</span>
            </div>
        </div>
        <div class="wallet-options">
            <div>
                <h6 class="subhead-wallet">WALLET</h6>
            </div>
            <div class="d-flex flex-column mb-3 options-menu">
                <span class="p-2">Rate</span>
                <span class="p-2">Contact Us</span>
                <span class="p-2">About</span>
            </div>
        </div>
        <div class="logout">
            <svg @click="logout" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#FFFFFF" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
            </svg>
        </div>
        <NavBar/>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'

    export default{
        components: {NavBar},
    }
</script>
<script setup>
        import {
        getAuth,
        signOut
    } from '@firebase/auth';
    import { useRouter } from 'vue-router';

    const auth = getAuth();
    const router = useRouter();

    const logout = () => {
        signOut(auth).then(() => {
            router.push('/login')
        }).catch((error) => {
            // An error happened.
        });
    }
</script>

<style>
    .profile-title{
        margin-top: 10%;
        letter-spacing: 2px;
        font-family: Poppins;
        color: #7E7E7E;
    }
    .border-circle{
        margin-top: 10%;
        border:4px solid #ffffff;
        border-radius:50%;
        background:rgba(0,0,0,0);
        color:white;
        width:150px;
        height:150px;
        text-align:center;
        line-height:100px;
    }
    .name{
        margin-top: 5%;
        font-size: 18px;
        letter-spacing: 2px;
        font-family: Poppins;
        color: #ffffff;
    }
    .profile-options{
        margin-top: 15%;
        margin-left: 5%;
    }
    .subhead-profile{
        color: #7e7e7e;
        font-family: Poppins;
        font-size: 12px;
    }
    .wallet-options{
        margin-top: 15%;
        margin-left: 5%;
    }
    .subhead-wallet{
        color: #7e7e7e;
        font-family: Poppins;
        font-size: 12px;
    }
    .options-menu{
        font-size: 14px;
        letter-spacing: 1px;
        font-family: Poppins;
        color: #ffffff;
    }
    .logout{
        margin-top: 20%;
        text-align: center;
    }
</style>