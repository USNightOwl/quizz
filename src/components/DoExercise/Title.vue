<template lang="">
  <div class="mb-4 md:mt-4 mt-2 flex md:gap-2 gap-4 items-center pl-2">
    <h1 class="text-2xl font-bold text-center flex-1">
      {{ props.name }}
    </h1>
    <router-link to="/" class="w-[8%] text-center">
      <Icon icon="pi-home" className="md:text-2xl text-xl"/>
    </router-link>
  </div>

</template>

<script setup>
  import Icon from "@/components/Icon.vue";

  const props = defineProps({
    name: {
      type: String,
      required: true,
    }
  });
</script>