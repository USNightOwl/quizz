<template lang="">
    <router-link to="/" >
      <div class="md:flex mb-6 gap-6 p-2 hover:bg-slate-100 rounded-md">
        <div class="md:w-4/12 h-fit">

          <img
            v-lazy="{ src: props.avatar }"  
            class="w-full rounded-lg object-cover h-32"
          />
        </div>
        <div class="flex flex-col justify-between">
          <h1 class="text-xl text-[#2b2d38] font-bold my-5 md:my-0">{{ props.name }}</h1>
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

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  });
</script>