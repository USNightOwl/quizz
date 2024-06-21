<template lang="">
  <router-link 
    :to="{ name: 'exercise', params: { classId: props.classId } }"
    class="hover:text-gray-400 uppercase"
  >
    {{ props.name }}
  </router-link>
</template>

<script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    classId: {
      type: String,
      required: true,
    },
  }); 
</script>