<template lang="">
  <div>
    <Header/>
    <div class="pt-12 min-h-screen px-5 md:px-20 mt-2">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
  import Header from "@/layout/Header.vue";
  import Footer from "@/layout/Footer.vue";
</script>