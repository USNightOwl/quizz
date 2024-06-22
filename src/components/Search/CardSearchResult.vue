<template lang="">
  <div>
    <router-link
      :to="{ name: 'do-exercise', params: { exerciseId: props.data.slug } }"
      @click.native="onClick"
    >
      <img
        v-lazy="{ src: props.data.avatar }"  
        class="w-full rounded-lg object-cover h-32 mb-2"
      />
    </router-link>
    <router-link 
      v-if="props.data.category"
      @click.native="onClick"
      :to="{ name: 'exercise', params: { classId: props.data.category.slug } }"
      class="font-semibold text-gray-400 uppercase text-xs hover:text-green-500"
    >
      {{ props.data.category.name }}
    </router-link>
    <router-link 
      :to="{ name: 'do-exercise', params: { exerciseId: props.data.slug } }"
      @click.native="onClick"
      class="font-bold leading-5 mt-2 mb-4 md:mb-2 block"
    >
      {{ props.data.name }}
    </router-link>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    }
  });

  const isShowSearchPopup = defineModel("isShowSearchPopup", {
    type: Boolean,
    required: true,
  });

  function onClick() {
    isShowSearchPopup.value = false;
  }
</script>