<template lang="">
  <div class="text-center">
    <h1 class="text-3xl md:text-4xl my-4 md:my-6 font-bold">
      {{ isSubmitHaveNiceResult(props.results.score)?"Xin chúc mừng!":"Bạn có thể thử lại lần nữa."}}
    </h1>
    <p>Với <span class="text-green-500 font-bold">{{ props.results.correctAnswers }}/{{ props.results.totalQuestion }}</span> câu trả lời đúng. Điểm của bạn là</p>
    <h1 
      :class="'text-4xl font-bold my-6 ' + (isSubmitHaveNiceResult(props.results.score)?'text-green-500':'text-red-400')"
    >{{ props.results.score }}</h1>
    <div class="flex md:flex-row flex-col gap-3 md:gap-5 flex-wrap md:my-10 my-8 justify-center items-center px-2">
      <ButtonUtils
        className="bg-[#f0f9eb] border-[#c2e7b0] hover:bg-[#67c23a] text-[#67c23a]"
        :func="handleTryAgain"
      >
        <Icon icon="pi-sync"/>
        Thử làm lại
      </ButtonUtils>

      <ButtonUtils
        className="bg-[#fdf6ec] border-[#f5dab1] hover:bg-[#e6a23c] text-[#e6a23c]"
        :func="handleShowResults"
      >
        <Icon icon="pi-file-check"/>
        Xem đáp án chi tiết
      </ButtonUtils>

      <ButtonUtils
        className="bg-[#f4f4f5] border-[#d3d4d6] hover:bg-[#909399] text-[#909399]"
        :func="handleDoMore"
      >
        <Icon icon="pi-send"/>
        Làm các đề khác
      </ButtonUtils>
    </div>

    <Quote/>
  </div>
</template>

<script setup>
  import ButtonUtils from "@/components/Button/ButtonUtils.vue";
  import Icon from "@/components/Icon.vue";
  import Quote from "@/components/DoExercise/Quote.vue";
  import router from "@/router";

  const emit = defineEmits(["change-show-results"]);
  const props = defineProps({
    slug: {
      type: String,
      required: true,
    },
    results: {
      type: Object,
      required: true,
    }
  });

  function isSubmitHaveNiceResult(score) {
    return score >= 5;
  }

  function handleTryAgain() {
    window.location.reload();
  }

  function handleDoMore() {
    router.push({ name: 'exercise', params: { classId: props.slug } });
  }

  function handleShowResults() {
    emit("change-show-results");
  }

</script>