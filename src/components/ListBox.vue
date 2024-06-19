<template lang="">
  <div>
    <Box v-for="n in 10" :key="n"/>
  </div>
</template>

<script setup>
  import Box from "@/components/Box.vue";
</script>