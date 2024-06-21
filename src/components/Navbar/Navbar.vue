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
    <Searchbar/>
  </div>

  <div class="flex lg:hidden justify-end flex-1 cursor-pointer">
    <Icon icon="pi-bars" className="text-xl"/>
  </div>
</template>

<script setup>
  import Searchbar from "@/components/Navbar/Searchbar.vue";
  import Icon from "@/components/Icon.vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";
  import { onMounted, reactive } from "vue";
  import SingleTab from "@/components/Navbar/SingleTab.vue";
  import MutilTab from "@/components/Navbar/MutilTab.vue";

  const categoryData = reactive([]);

  onMounted(async ()=> {
    const HomeRepository = RepositoryFactory.get("home");
    const { data } = await HomeRepository.getCategory();
    categoryData.value = data;

    console.log(categoryData.value);
  });
</script>