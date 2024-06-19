<template lang="">
  <div>
    <router-link :to="props.url" class="mb-5 text-3xl font-bold hover:text-[#67c23a] text-center md:text-left">
      <h1 class="mb-5 text-3xl font-bold hover:text-[#67c23a] text-center md:text-left">{{ title }}</h1>
    </router-link>
    <div class="grid md:grid-cols-3 gap-x-8 md:gap-y-10 gap-y-5 grid-cols-1 mb-10">
      <Card v-for="n in 6" :key="n"/>
    </div>
  </div>
</template>

<script setup>
  import Card from"@/components/Card.vue";

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    }
  });
</script>