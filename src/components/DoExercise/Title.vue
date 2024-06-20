<template lang="">
  <div class="my-5 flex md:gap-2 gap-4 items-center">
    <h1 class="md:text-2xl text-xl font-bold text-center flex-1">
      {{ props.name }}
    </h1>
    <router-link to="/" class="w-1/12">
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