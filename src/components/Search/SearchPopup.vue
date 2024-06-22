<template lang="">
  <div 
    class="box-shadow z-[1000] absolute top-0 bg-white h-screen md:w-6/12 w-full p-4 rounded right-0"
    v-show="isShowSearchPopup"
    ref="container"
  >
    <div class="flex justify-between items-center font-normal">
      <h1 class="text-gray-500 text-lg">Tìm đề thi</h1>
      <button @click="isShowSearchPopup=false">
        <Icon icon="pi-times" class="text-gray-400 text-lg"/>
      </button>
    </div>

    <SearchHandle v-model:isShowSearchPopup="isShowSearchPopup"/>
  </div>
</template>

<script setup>
  import Icon from "@/components/Icon.vue";
  import { ref } from 'vue';
  import { useClickOutside } from "@/hooks/useClickOutside";
  import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
  import SearchHandle from "@/components/Search/SearchHandle.vue";

  const isShowSearchPopup = defineModel("isShowSearchPopup", {
    type: Boolean,
    required: true,
  });

  const container = ref(null);
  useClickOutside(container, () => {
    if (isShowSearchPopup.value){
      isShowSearchPopup.value = false;
    }
  });
  useKeyboardShortcut({ 
    key: "Escape", 
    onKeyPressed: function() { 
      isShowSearchPopup.value = false;
    }
  });

</script>

<style scoped>
  .box-shadow {
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12);
  }
</style>