<template lang="">
  <div class="text-xs hidden md:flex uppercase font-semibold justify-between items-center flex-1">
    <div class="flex gap-5">
      <div class="hover:text-gray-400 cursor-pointer">Đề thi THPT</div>
      <router-link :to="{ name: 'exercise', params: { classId: 'lop-12' } }" class="hover:text-gray-400">
        Lớp 12
      </router-link>
      <router-link :to="{ name: 'exercise', params: { classId: 'lop-11' } }" class="hover:text-gray-400">
        Lớp 11
      </router-link>
      <router-link :to="{ name: 'exercise', params: { classId: 'lop-10' } }" class="hover:text-gray-400">
        Lớp 10
      </router-link>
      <router-link :to="{ name: 'exercise', params: { classId: 'bai-tap-tieng-anh' } }" class="hover:text-gray-400">
        Tiếng anh
      </router-link>
      <router-link class="hover:text-gray-400" :to="{ name: 'exercise', params: { classId: 'bai-tap-tieng-anh' } }">Đại học</router-link>
      <router-link class="hover:text-gray-400" :to="{ name: 'exercise', params: { classId: 'bai-tap-tieng-anh' } }">Trắc nghiệm tính cách MBTI</router-link>
    </div>
    <Searchbar/>
  </div>

  <div class="flex md:hidden justify-end flex-1 cursor-pointer">
    <Icon icon="pi-bars" className="text-xl"/>
  </div>
</template>

<script setup>
  import Searchbar from "@/components/Searchbar.vue";
  import Icon from "@/components/Icon.vue";
</script>