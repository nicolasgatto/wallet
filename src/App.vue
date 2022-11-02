<template>
   <div class="App">
    <router-view v-slot="{ Component }">
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
    text-decoration: none;
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
</style>