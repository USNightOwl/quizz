<template lang="">
  <div>
    <Box 
      v-for="exam in exams.data" 
      :key="exam.slug"
      :name="exam.name"
      :avatar="exam.avatar"
      :description="exam.description || exam.meta_description"
    />
  </div>
</template>

<script setup>
  import Box from "@/components/Box.vue";

  const props = defineProps({
    exams: {
      type: Object,
      required: true,
    }
  });
</script>