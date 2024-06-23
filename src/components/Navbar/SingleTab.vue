<template lang="">
  <div class="md:border-0 border-t w-full md:p-0 px-1 py-2 ">
    <router-link 
      @click.native="onClick"
      :to="{ name: 'exercise', params: { classId: props.classId } }"
      class="hover:text-gray-400 uppercase block text-gray-600"
    >
      {{ props.name }}
    </router-link>
  </div>
</template>

<script setup>
  const isShowNavbar = defineModel("isShowNavbar", {
    type: Boolean,
    required: false,
  });
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

  function onClick() {
    if (isShowNavbar) {
      isShowNavbar.value = false;
    }
  }
</script>