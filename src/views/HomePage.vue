<template lang="">
  <div class="flex gap-5 my-4 md:my-6 flex-col md:flex-row justify-center">
    <div v-if="homeData.value && homeData.value.editorChoice" class="w-full md:w-8/12">
      <EditorChoice
        :avatar="homeData.value.editorChoice.avatar"
        :title="homeData.value.editorChoice.name"
        :slug="homeData.value.editorChoice.slug"
        :categoryName="homeData.value.editorChoice.category.name"
        :categorySlug="homeData.value.editorChoice.category.slug"
      />
    </div>
    <div v-if="homeData.value && homeData.value.trending" class="w-full md:w-3/12">
      <EditorChoicePost
        v-for="trending in homeData.value.trending"
        :avatar="trending.avatar"
        :title="trending.name"
        :slug="trending.slug"
        :categoryName="trending.category.name"
        :categorySlug="trending.category.slug"
      />
    </div>
  </div>

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
  import EditorChoice from"@/components/EditorChoice.vue";
  import EditorChoicePost from"@/components/EditorChoicePost.vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";
  import { onMounted, reactive } from "vue";
  import { useLoadingStore } from "@/store/loading";

  const HomeRepository = RepositoryFactory.get("home");
  const loadingStore = useLoadingStore();
  const homeData = reactive([]);

  onMounted(async ()=> {
    loadingStore.changeLoadingState(true);
    const { data } = await HomeRepository.get();
    loadingStore.changeLoadingState(false);
    homeData.value = data;
  });
  
</script>