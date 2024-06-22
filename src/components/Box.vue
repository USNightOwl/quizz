<template lang="">
    <router-link 
      :to="{ name: 'do-exercise', params: { exerciseId: props.slug } }" 
    >
      <div class="md:flex mb-6 gap-6 p-2 hover:bg-slate-100/70 rounded-md">
        <div class="md:w-3/12">
          <img
            v-lazy="{ src: props.avatar }"  
            class="w-full rounded-lg object-cover h-32"
          />
        </div>
        <div class="flex flex-col justify-between flex-1">
          <h1 class="text-xl text-[#2b2d38] font-bold my-5 md:my-0">{{ props.name }}</h1>
          <p class="text-[#8189a9] text-md hidden md:block">
            {{ props.description }}
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
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    }
  });
</script>