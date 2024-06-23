<template lang="">
  <div class="uppercase px-1 py-2 border-t">
    <div class="cursor-default text-gray-600">{{ props.name }}</div>
    <router-link
        v-for="item in props.childrenNode"
        :to="{ name: 'exercise', params: { classId: item.slug } }"
        :key="item.slug"
        @click.native="onClick"
        class="p-2 px-4 cursor-pointer hover:text-gray-400 text-gray-600 block"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script setup>
  import SingleTab from "@/components/Navbar/SingleTab.vue";
  import { reactive } from "vue";

  const isShowNavbar = defineModel("isShowNavbar", {
    type: Boolean,
    required: true,
  });
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    childrenNode: {
      type: Array,
      required: true,
    }
  }); 

  function onClick() {
    if (isShowNavbar) {
      isShowNavbar.value = false;
    }
  }
</script>