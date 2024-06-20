<script setup>
  import 'primeicons/primeicons.css'
  import { computed } from 'vue'
  import { useLoadingStore } from "@/store/loading";
  import Icon from "@/components/Icon.vue";

  const loadingStore = useLoadingStore();
  const isLoading = computed(() => loadingStore.isLoading);
</script>

<template>
  <div v-if="isLoading" class="bg-white/80 fixed top-0 left-0 z-[1000] h-screen w-full flex justify-center items-center">
    <Icon icon="pi-spin pi-spinner" className="text-3xl text-[#67c23a]"/>
  </div>
  <router-view></router-view>
</template>

