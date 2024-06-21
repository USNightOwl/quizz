<template lang="">
  <button 
    class="text-gray-400 flex items-center gap-1 outline-none text-[0.6rem]" 
    @click="isShowSearchPopup = !isShowSearchPopup"
  >
    <Icon icon="pi-search" />
    <span class="uppercase">tìm kiếm</span>
  </button>

  <SearchPopup
    v-model:isShowSearchPopup="isShowSearchPopup"
  />
</template>

<script setup>
  import Icon from "@/components/Icon.vue";
  import SearchPopup from "@/components/Navbar/SearchPopup.vue";
  import { ref } from "vue";

  const isShowSearchPopup = ref(false);
</script>