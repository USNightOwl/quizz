<template lang="">
  <div>
    <Header/>
    <div class="pt-14 min-h-screen px-3 md:px-20">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
  import Header from "@/layout/Header.vue";
  import Footer from "@/layout/Footer.vue";
</script>