<template lang="">
  <div class="text-xs hidden lg:flex font-semibold justify-between items-center flex-1">
    <div class="flex gap-5">
      <div
        v-for="cate in categoryData.value"
        :key="cate.id"
      >
        <SingleTab 
          v-if="cate.children.length <= 0"
          :name="cate.name"
          :classId="cate.slug"
        />
        <MutilTab 
          v-else
          :name="cate.name"
          :children-node="cate.children"
        />
      </div>
    </div>
    
  </div>
  <Searchbar v-model:isShowSearchPopup="isShowSearchPopup"/>

  <div class="flex lg:hidden justify-end flex-1 cursor-pointer">
    <button @click="isShowNavbar=true" class="focus:outline-none">
      <Icon icon="pi-bars" className="text-xl"/>
    </button>
    <div v-show="isShowNavbar" class="bg-white w-full absolute top-0 left-0 px-2 h-screen flex flex-col">
      <div class="flex justify-between items-center py-2 border-b border-b-gray-100">
        <div class="uppercase flex items-center gap-1 text-gray-600" @click="handleClick">
          Tìm kiếm 
          <Icon icon="pi-search" class="text-sm"/>
        </div>
        <button @click="isShowNavbar=false"> 
          <Icon icon="pi-times" class="text-gray-400 text-xl"/>
        </button>
      </div>
      <div class="overflow-y-scroll flex-1">
          <div
            v-for="cate in categoryData.value"
            :key="cate.id"
          >
            <SingleTab 
              v-if="cate.children.length <= 0"
              :name="cate.name"
              :classId="cate.slug"
              v-model:isShowNavbar="isShowNavbar"
            />
            <MutilTabMobile 
              v-else
              :name="cate.name"
              :children-node="cate.children"
              v-model:isShowNavbar="isShowNavbar"
            />
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Searchbar from "@/components/Navbar/Searchbar.vue";
  import Icon from "@/components/Icon.vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";
  import { onMounted, reactive, ref } from "vue";
  import SingleTab from "@/components/Navbar/SingleTab.vue";
  import MutilTab from "@/components/Navbar/MutilTab.vue";
  import MutilTabMobile from "@/components/Navbar/MutilTabMobile.vue";

  const categoryData = reactive([]);
  const isShowNavbar = ref(false);
  const isShowSearchPopup = ref(false);

  onMounted(async ()=> {
    const HomeRepository = RepositoryFactory.get("home");
    const { data } = await HomeRepository.getCategory();
    categoryData.value = data;
  });

  function handleClick() {
    isShowSearchPopup.value = true;
    isShowNavbar.value = false;
  }
</script>