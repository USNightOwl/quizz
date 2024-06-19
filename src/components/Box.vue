<template lang="">
    <router-link to="/" >
      <div class="md:flex mb-6 gap-6 p-2 hover:bg-slate-100 rounded-md">
        <div class="md:w-4/12 h-fit">
          <img src="https://api.baitaptracnghiem.com/storage/images/vfOcrwr1mmEuj1HEE6jPFgQ4Hu2SdoFk7Z4bc09y.jpg" alt="exercise-background" class="w-fit rounded-lg object-contain"/>
        </div>
        <div class="flex flex-col justify-between">
          <h1 class="text-xl text-[#2b2d38] font-bold my-5 md:my-0">Bài tập trắc nghiệm về cực trị của hàm số</h1>
          <p class="text-[#8189a9] text-md hidden md:block">
            Bài tập trắc nghiệm cực trị của hàm số có đáp án chi tiết hay nhất được tổng hợp giúp các bạn ôn luyện lại các kiến thức đã học
          </p>
          <Category title="Web"/>
        </div>
      </div>
    </router-link>
</template>

<script setup>
  import Category from "@/components/Button/Category.vue";
</script>