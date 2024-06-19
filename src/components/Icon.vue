<template lang="">
  <i :class="'pi '+props.icon+' '+props.className"></i>
</template>

<script setup>
  const props = defineProps({
      icon: {
        type: String,
        required: true,
      },
      className: {
        type: String,
      }
  });
</script>