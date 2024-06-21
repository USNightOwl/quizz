<template lang="">
  <div v-if="homeData.value && homeData.value.categories">
    <ListCard 
      v-for="category in homeData.value.categories"
      :title="category.name" 
      :key="category.slug"
      :exams="category.exams"
      :url="category.slug"
    />
  </div>
  
</template>

<script setup>
  import ListCard from"@/components/ListCard.vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";
  import { onMounted, reactive } from "vue";
  import { useLoadingStore } from "@/store/loading";

  const loadingStore = useLoadingStore();
  const homeData = reactive([]);

  onMounted(async ()=> {
    const HomeRepository = RepositoryFactory.get("home");
    loadingStore.changeLoadingState(true);
    const { data } = await HomeRepository.get();
    loadingStore.changeLoadingState(false);
    homeData.value = data;
  });
  
</script>