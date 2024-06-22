<template lang="">
  <div>
    <Box 
      v-for="exam in props.exams.data" 
      :key="exam.slug"
      :name="exam.name"
      :avatar="exam.avatar"
      :description="exam.description || exam.meta_description"
      :slug="exam.slug"
    />

    <custom-pagination 
      :per-page="props.exams.per_page"
      :total-items="props.exams.total"
      :current-page="props.currentPage"
      :func="changePage"
    />
  </div>
</template>

<script setup>
  import Box from "@/components/Box.vue";
  import CustomPagination from "@/components/CustomPagination.vue";
  import router from "@/router";
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const props = defineProps({
    exams: {
      type: Object,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    }
  });

  function changePage(page) {
    const classId = route.params.classId;
    router.push({ name: "exercise", params: { classId }, query: {
      page,
    }})
  }
</script>