<template lang="">
  <div>
    <Header/>
    <div class="pt-12 min-h-screen">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
  import Header from "@/layout/Header.vue";
  import Footer from "@/layout/Footer.vue";
</script>