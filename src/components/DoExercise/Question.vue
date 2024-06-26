<template lang="">
  <div class="mb-5" v-if="props.result == null">
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

  <div v-else>
    <div class="flex items-center gap-3">
      <Icon icon="pi-check" v-if="props.result.answer === props.result.answered" class="text-green-500 font-black"/>
      <Icon icon="pi-times" v-else class="text-red-500 font-black"/>
      <h1 v-html="props.name"></h1>
    </div>
    <p v-for="(ans, idx) in props.answers" :key="ans.id" class="text-[1rem] leading-4 mb-4 px-1 flex items-center mt-2 cursor-not-allowed">
      <input 
        :id="'question-'+props.questionId+'-'+idx" 
        type="radio" 
        :checked="ans.name===props.result.answered||ans.name===props.result.answer"
        :class="'w-4 h-4 bg-gray-100 border-gray-300 cursor-not-allowed focus:outline-none ' +(ans.name===props.result.answered?'success':ans.name===props.result.answer?'error':'')"
        autocomplete="off"
        :disabled="!(ans.name===props.result.answered||ans.name===props.result.answer)"
      />

      <label 
        :for="'question-'+props.questionId+'-'+idx"  
        :class="'ms-2 cursor-not-allowed ' +(ans.name===props.result.answered?'text-[#48c00c]':ans.name===props.result.answer?'text-red-500':'')"
      >
        {{ ans.name }}
      </label>
    </p>
  </div>
</template>

<script setup>
  import { ref, watch } from "vue";
  import Icon from "@/components/Icon.vue";
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
    },
    result: {
      type: Object || null,
    }
  });

  const checked = ref();

  watch(() => checked.value, ()=>{
    emit("update-answer", checked.value, props.pageIdx, props.questionIdx)
  })
</script>

<style scoped>
  .error {
    accent-color: red!important;
  }
  .success {
    accent-color: green!important;
  }
</style>