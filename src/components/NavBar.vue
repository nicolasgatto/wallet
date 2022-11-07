<template>
    <div class="container-fluid">
        <div class="navbar fixed-bottom">
            <div class="home">
                <router-link to="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-activity" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
                    </svg>
                </router-link>
            </div>
            <div class="transaction">
                <router-link to="/home/transaction">
                    <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-plus-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </router-link>
            </div>
            <div class="settings">
                <router-link to="/home/settings">
                    <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .navbar{
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 15px;
    }
    .router-link-exact-active .bi{
        color: #ffffff;
        fill: #ffffff;
    }
    .bi{
        fill: #7e7e7e;
        width: 24px;
        height: 24px;
        transition: 250ms;
    }
</style>