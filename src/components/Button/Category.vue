<template lang="">
  <span class="border border-[#67c23a] text-[#67c23a] w-fit text-xs px-1 rounded text-nowrap">
    {{ title }}
  </span>
</template>

<script setup>
  const props = defineProps({
      title: {
        type: String,
        required: true,
      }
  });
</script>