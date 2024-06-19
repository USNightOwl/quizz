<template lang="">
  <i :class="'pi '+props.icon+' '+props.className"></i>
</template>

<script setup>
  const props = defineProps(['icon', 'className']);
</script>