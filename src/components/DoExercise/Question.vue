<template lang="">
  <div class="mb-4">
    <h1 v-html="props.name" class="mb-2"></h1>
    <p v-for="(ans, idx) in props.answers" :key="ans.id" class="text-sm mb-4 px-1 flex items-center">
      <input 
        :id="'question-'+props.questionId" 
        type="radio" 
        :value="idx" 
        :name="'question-'+props.questionId" 
        v-model="checked"
        class="w-4 h-4 bg-gray-100 border-gray-300 cursor-pointer focus:outline-none"
      />

      <label 
        :for="'question-'+props.questionId" 
        :class="'ms-2 cursor-pointer ' + (checked===idx && 'text-[#67c23a]')"
      >
        {{ ans.name }}
      </label>
    </p>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    answers: {
      type: Array,
      required: true,
    },
    questionId: {
      type: Number,
      required: true,
    }
  });

  const checked = ref();
</script>