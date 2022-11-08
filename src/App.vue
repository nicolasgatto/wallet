<template>
   <div class="App">
    <div class="container">
      <div class="d-none d-sm-block">
        <span class="row justify-content-center align-items-center message">Only available on mobile currently, sorry :(</span>
      </div>
    </div>
    <router-view v-slot="{ Component }" class="d-block d-sm-none">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
  
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  a{
    text-decoration: none !important;
  }
  body{
    background-color: #090909 !important;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease-out;
  }
  .cover{
      position:fixed;
      background:rgba(10,10,10,1);
      z-index:5;
      width:100%;
      height:100%;
  }
  .message{
    font-size: 24px;
    letter-spacing: 2px;
    color: #7e7e7e;
    font-family: Poppins;
    z-index:10;
  }
  .container .row {
    height: 100vh;
  }
</style>