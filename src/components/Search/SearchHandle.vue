<template lang="">
  <div class="relative flex h-[90vh] flex-col">
    <div v-show="isLoading" class="z-[1000] absolute top-0 lef-0 w-full h-full bg-white/80 flex items-center justify-center" >
      <Icon icon="pi-spin pi-spinner" className="text-3xl text-[#67c23a]"/>
    </div>
    
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
      <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-[#67c23a] rounded border border-[#67c23a] hover:bg-[#5cad34] hover:border-[#5cad34] focus:ring-none focus:outline-none focus:ring-[#67c23a]/80 ">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </form>

    <div v-if="searchData.value?.results?.data.length > 0" class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-3 flex-1 overflow-y-auto" ref="scroll">
      <CardSearchResult
        v-for="item in searchData.value.results.data"
        :key="item.slug"
        :data="item"
        v-model:isShowSearchPopup="isShowSearchPopup"
      /> 
    </div>
    <div v-else-if="searchData.value?.results?.data.length == 0" class="flex flex-col items-center justify-center text-gray-400 font-medium text-lg py-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg>
      <div>Chúng tớ không tìm thấy kết quả phù hợp.</div>
    </div>

    <div class="border-t" v-if="searchData.value?.results">
      <custom-pagination 
        :per-page="searchData.value.results.per_page"
        :total-items="searchData.value.results.total"
        :current-page="searchData.value.results.current_page"
        :func="changePage"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";
  import { onMounted, reactive } from "vue";
  import CardSearchResult from "@/components/Search/CardSearchResult.vue";
  import Icon from "@/components/Icon.vue";
  import CustomPagination from "@/components/CustomPagination.vue";

  const isShowSearchPopup = defineModel("isShowSearchPopup", {
    type: Boolean,
    required: true,
  });

  const scroll = ref();
  const searchData = reactive([]);

  const ExamRepository = RepositoryFactory.get("exams");
  const searchText = ref("");
  const isLoading = ref(false);
  const currentPage = ref(1);
  
  async function handleSubmit() {
    isLoading.value = true;
    const { data } = await ExamRepository.search(searchText.value, currentPage.value);
    searchData.value = data;
    scroll.value?.scrollTo(0, 0);
    isLoading.value = false;
  }

  function changePage(page) {
    currentPage.value = page;
    handleSubmit();
  }
</script>