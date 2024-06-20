<template lang="">
  <div v-if="homeData.value && homeData.value.categories">
    <ListCard 
      v-for="category in homeData.value.categories"
      :title="category.name" 
      :key="category.slug"
      :exams="category.exams"
      :url="`/danh-sach-bai-tap/${category.slug}`"
    />
  </div>
  <div v-else>Loading...</div>
  
</template>

<script setup>
  import ListCard from"@/components/ListCard.vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";
  import { onMounted, reactive } from "vue";

  const homeData = reactive([]);

  onMounted(async ()=> {
    const HomeRepository = RepositoryFactory.get("home");
    const { data } = await HomeRepository.get();
    homeData.value = data;
  });
  
</script>