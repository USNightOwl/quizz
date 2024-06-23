<template lang="">
  <input 
    type="text"
    v-if="props.size > 40"
    class="border rounded p-2 font-normal focus:outline-green-400 !focus:outline-[0.1px] text-gray-500"
    placeholder="Tìm môn học"
    v-model="inputCategory"
    @input="createDebounce"
  />
</template>

<script setup>
  import { ref } from "vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";

  const HomeRepository = RepositoryFactory.get("home");
  let timeout = null;
  const inputCategory = ref("");

  const searchData = defineModel("searchData")
  const props = defineProps({
    size: {
      type: Number,
      required: true,
    }
  });

  function createDebounce(fnc) {
    clearTimeout(timeout);
    timeout = setTimeout(async() => {
      const { data } = await HomeRepository.searchCategory(inputCategory.value);
      searchData.value = data;
    }, 300);
  }
</script>