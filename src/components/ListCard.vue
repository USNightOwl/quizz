<template lang="">
  <div v-if="props.exams.length > 0">
    <router-link 
      :to="{ name: 'exercise', params: { classId: formatDefaultSlug(props.url) } }"
      class="mb-5 text-3xl font-bold hover:text-[#67c23a] text-center md:text-left"
    >
      <h1 class="mb-5 text-3xl font-bold hover:text-[#67c23a] text-center md:text-left">{{ title }}</h1>
    </router-link>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-y-10 gap-y-5 grid-cols-1 mb-10">
      <Card 
        v-for="exam in props.exams" 
        :key="exam.slug"
        :avatar="exam.avatar"
        :title="exam.name"
        :slug="exam.slug"
      />
    </div>
  </div>
</template>

<script setup>
  import Card from"@/components/Card.vue";
  import { formatDefaultSlug } from "@/utils/helpers";

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    exams: {
      type: Array,
      required: true,
    }
  });
</script>