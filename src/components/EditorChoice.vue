<template lang="">
  <div class="shadow-lg rounded-lg">
    <router-link 
      :to="{ name: 'do-exercise', params: { exerciseId: props.slug } }"
      class="text-xl font-bold"
    >
      <img
        v-lazy="{ src: props.avatar }"  
        class="w-full rounded-t-lg object-cover h-60"
      />
    </router-link>
    <div class="rounded-b-lg p-3 md:p-2">
      <router-link 
        :to="{ name: 'exercise', params: { classId: props.categorySlug } }"
        class="uppercase font-semibold text-gray-500 block w-fit mb-2 hover:text-green-500 text-sm text-nowrap"
      >
        {{ props.categoryName}}
      </router-link>

      <router-link 
        :to="{ name: 'do-exercise', params: { exerciseId: props.slug } }"
        class="font-bold md:text-xl text-base"
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