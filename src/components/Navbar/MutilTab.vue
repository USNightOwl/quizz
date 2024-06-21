<template lang="">
  <div class="relative">
    <div 
      class="hover:text-gray-400 cursor-pointer flex items-center gap-1"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      {{ props.name }}
      <Icon icon="pi-sort-down-fill" class="text-[#a6adc9] text-[0.6rem]"/>
    </div>
    <div 
      v-if="isShow" 
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      class="w-fit absolute max-h-[24rem] top-4 left-0 shadow-lg bg-white rounded overflow-y-auto"
    >
      <router-link
        v-for="item in props.childrenNode"
        :to="{ name: 'exercise', params: { classId: item.slug } }"
        :key="item.slug"
        class="p-2 text-nowrap text-[#606266] text-[0.7rem] cursor-pointer hover:bg-slate-100/80 block"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
  
</template>

<script setup>
  import { ref } from "vue";
  import Icon from "@/components/Icon.vue";
  
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
  const isShow = ref(false);

  function mouseEnter() {
    isShow.value = true;
  }
  function mouseLeave() {
    isShow.value = false;
  }
</script>