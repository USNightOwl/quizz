<template lang="">
  <div class="mb-5">
    <h1 v-html="props.name" class="mb-2"></h1>
    <p v-for="(ans, idx) in props.answers" :key="ans.id" class="text-[1rem] leading-4 mb-4 px-1 flex items-center">
      <input 
        :id="'question-'+props.questionId+'-'+idx" 
        type="radio" 
        :value="idx" 
        v-model="checked"
        class="w-4 h-4 bg-gray-100 border-gray-300 cursor-pointer focus:outline-none"
      />

      <label 
        :for="'question-'+props.questionId+'-'+idx"  
        :class="'ms-2 cursor-pointer ' + (checked===idx && 'text-[#67c23a]')"
      >
        {{ ans.name }}
      </label>
    </p>
  </div>
</template>

<script setup>
  import console from "console";
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