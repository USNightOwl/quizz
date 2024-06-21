<template lang="">
  <div>
    <form class="flex items-center mt-4" @submit.prevent="handleSubmit">   
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <input 
          type="text" id="simple-search" 
          class="bg-gray-50 border border-gray-300 text-[#606266] text-sm rounded focus:ring-[#67c23a] focus:outline-[#67c23a]/80 focus:border-[#67c23a] block w-full p-2.5" 
          placeholder="Nhập từ khoá bạn muốn tìm..." 
          v-model="searchText"
          required 
        />
      </div>
      <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-[#67c23a] rounded border border-[#67c23a] hover:bg-[#5cad34] hover:border-[#5cad34] focus:ring-4 focus:outline-none focus:ring-[#67c23a]/80">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";
  import { onMounted, reactive } from "vue";
  import { useLoadingStore } from "@/store/loading";

  const searchData = reactive([]);

  const ExamRepository = RepositoryFactory.get("exams");
  const searchText = ref("");

  async function handleSubmit() {
    const { data } = await ExamRepository.search(searchText.value, 1);
    searchData.value = data;

    console.log(searchData.value);
  }
</script>