<template lang="">
  <div class="shadow-lg md:shadow-none mb-5 md:mb-0 rounded-lg">
    <router-link 
      :to="{ name: 'do-exercise', params: { exerciseId: props.slug } }"
      class="text-xl font-bold md:hidden"
    >
      <img
        v-lazy="{ src: props.avatar }"  
        class="w-full rounded-t-lg object-cover h-60"
      />
    </router-link>
    <div class="rounded-b-lg p-3 md:p-2 md:hover:bg-slate-100/80 rounded">
      <router-link 
        :to="{ name: 'exercise', params: { classId: props.categorySlug } }"
        class="uppercase font-semibold text-gray-500 block w-fit mb-2 hover:text-green-500 md:hidden text-sm md:text-sm text-nowrap"
      >
        {{ props.categoryName}}
      </router-link>

      <router-link 
        :to="{ name: 'do-exercise', params: { exerciseId: props.slug } }"
        class="md:text-[0.5rem] md:uppercase text-base font-bold md:text-green-500 md:leading-4 block"
      >
        {{ props.title }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    categorySlug: {
      type: String,
      required: true,
    },
  });
</script>