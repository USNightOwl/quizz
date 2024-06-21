<template lang="">
  <div class="bg-slate-50 m-0 py-2 px-1">
    <div class="md:w-9/12 rounded  mx-auto box-shadow bg-white text-[#606266] flex flex-col">
      <div v-if="!loadingStore.isLoading && examData">
        <Title :name="examData.value.exam.name"/>
        <div class="md:px-4 px-2 text-base mb-8">
          <i class="font-medium" v-html="examData.value.exam.pages[0].note">
          </i>
          <div class="my-3">
            <Question 
              v-for="q in examData.value.exam.pages[0].questions"
              :key="q.id"
              :name="q.name"
              :answers="q.answers"
              :question-id="q.id"
            />
          </div>
        </div>

        <div class="flex justify-center mb-3">
          <button @click="submitExam" type="button" class="px-4 py-1.5 rounded bg-[#67c23a] text-white hover:bg-[#67c23a]/80 flex items-center gap-2 text-base">
            <Icon icon="pi-check"/>
            Nộp bài
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { watch, reactive } from "vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";
  import { useLoadingStore } from "@/store/loading";
  import { toast } from 'vue3-toastify';
  import Title from "@/components/DoExercise/Title.vue";
  import Question from "@/components/DoExercise/Question.vue";
  import Icon from "@/components/Icon.vue";

  const examData = reactive([]);
  const loadingStore = useLoadingStore();
  const route = useRoute();

  watch(() => [route.path, route.query], async () => {
    const exerciseId = route.params.exerciseId;
    const ExamRepository = RepositoryFactory.get("exams");

    loadingStore.changeLoadingState(true);
    const { data } = await ExamRepository.getOne(exerciseId);
    loadingStore.changeLoadingState(false);

    examData.value = data;

    toast.warning("Bạn hãy kéo xuống kiểm tra đề một lượt trước khi làm bài nhé. Chúc bạn đạt kết quả tốt!", {
      toastStyle: {
        fontSize: '14px',
      },
    });
  }, { immediate: true });

  function submitExam() {
    alert("This feature will implement later");
  }
</script>

<style lang="scss">
  .box-shadow {
    box-shadow: 0 0 10px rgba(37, 41, 45, .1);
  }
</style>