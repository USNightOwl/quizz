<template lang="">
  <div class="relative uppercase">
    <div 
      class="hover:text-gray-400 text-gray-600 cursor-pointer flex items-center gap-1"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      {{ props.name }}
      <Icon icon="pi-sort-down-fill" class="text-[#a6adc9] text-[0.6rem]"/>
    </div>
    <div 
      v-show="isShow" 
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      class="w-fit absolute max-h-[24rem] top-4 left-0 box-shadow bg-white rounded flex flex-col"
    >
      <SearchCategory
        :size="props.childrenNode.length"
        v-model:searchData="searchData"
      />

      <div class="flex-1 overflow-y-auto">
        <div v-if="searchData.results?.length > 0">
          <router-link
            v-for="item in searchData.results"
            :to="{ name: 'exercise', params: { classId: item.slug } }"
            :key="item.slug"
            class="p-2 text-nowrap text-[#606266] text-[0.7rem] cursor-pointer hover:bg-slate-200/30 block"
          >
            {{ item.name }}
          </router-link>
        </div>
        <div v-else-if="searchData.results?.length == 0" class="text-center p-2 text-red-600">
          KHÔNG TÌM THẤY
        </div>
        <div v-else>
          <router-link
            v-for="item in props.childrenNode"
            :to="{ name: 'exercise', params: { classId: item.slug } }"
            :key="item.slug"
            class="p-2 text-nowrap text-[#606266] text-[0.7rem] cursor-pointer hover:bg-slate-200/30 block"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
  import { ref, reactive } from "vue";
  import Icon from "@/components/Icon.vue";
  import SearchCategory from "@/components/Navbar/SearchCategory.vue";

  const searchChildren = reactive([]);
  const searchData = ref([]);
  
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

<style scoped>
  .box-shadow {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .2);
  }
</style>