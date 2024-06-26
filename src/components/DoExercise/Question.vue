<template lang="">
  <div class="mb-5">
        
    <h1 
      v-html="props.name"
      :class="{'text-red-500' : props.warning}"
    ></h1>
    <p v-for="(ans, idx) in props.answers" :key="ans.id" class="text-[1rem] leading-4 mb-4 px-1 flex items-center mt-2">
      <input 
        :id="'question-'+props.questionId+'-'+idx" 
        type="radio" 
        :value="ans.name" 
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
  import { ref, watch } from "vue";
  const emit = defineEmits(["update-answer"]);

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
    },
    questionIdx: {
      type: Number,
      required: true,
    },
    pageIdx: {
      type: Number,
      required: true,
    },
    warning: {
      type: Boolean,
    }
  });

  const checked = ref();

  watch(() => checked.value, ()=>{
    emit("update-answer", checked.value, props.pageIdx, props.questionIdx)
  })
</script>