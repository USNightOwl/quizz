<template lang="">
  <div>
    <router-link to="">
      <div class="w-full h-40">
        <img 
          v-lazy="{ src: props.avatar }" 
          class="rounded-lg object-cover w-full h-40"
        />
      </div>
      <div class="text-md mt-3">{{ props.title }}</div>
    </router-link>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  });
</script>