<template lang="">
  
  <div v-if="isLoading" class="md:mb-8 mb-5">
    <Icon icon="pi-spin pi-spinner" className="text-base md:text-xl text-[#67c23a]"/>
  </div>
  <i
    v-else
    class="block md:mb-8 mb-5 text-base md:text-xl md:px-8 px-2" v-html="quote">
  </i>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import Icon from "@/components/Icon.vue";
  const quote = ref("");
  const isLoading = ref(true);

  onMounted(async ()=> {
    const API_KEY = "SltTB9eBPK6on57H/Vlygg==1GGt23U1uXtMedKH";
    isLoading.value = true;
    const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=learning", {
      headers: {
        'x-api-key': API_KEY,
      }
    });
    isLoading.value = false;
    const quoteData = await response.json();
    quote.value = `${quoteData[0].quote} - <b>${quoteData[0].author}</b>`;
  });
</script>