<template lang="">
  <div class="bg-slate-50 m-0 py-2 px-1">
    <div class="md:w-9/12 rounded  mx-auto box-shadow bg-white text-[#606266] flex flex-col">
      <div v-if="!loadingStore.isLoading && examData && !isShowResults">
        <Title :name="examData.value.exam.name"/>
        <div class="md:px-4 px-2 text-base mb-8">
          <i class="font-medium" v-html="examData.value.exam.pages[0].note">
          </i>
          <div class="my-3 px-3">
            <div
              v-for="(page, pageIdx) in examData.value.exam.pages"
            >
              <Question 
                v-for="(q, questionIdx) in page.questions"
                :key="q.id"
                :name="q.name"
                :answers="q.answers"
                :question-id="q.id"
                :page-idx="pageIdx"
                :question-idx="questionIdx"
                :warning="q.warning==false||!isFirstSubmit?false:true"
                @update-answer="handleUpdateAnswer"
                :result="resultsData.value?.exam?.pages[pageIdx]?.questions[questionIdx]||null"
              />
            </div>
          </div>
        </div>

        <div class="flex justify-center mb-3">
          <button @click="submitExam" type="button" class="px-4 py-1.5 rounded bg-[#67c23a] text-white hover:bg-[#67c23a]/80 flex items-center gap-2 text-base"
          v-if="resultsData.value?.exam==null"
          >
            <Icon icon="pi-check"/>
            Nộp bài
          </button>
          <router-link v-else class="border px-4 py-1.5 rounded flex items-center gap-2 text-base bg-[#f4f4f5] border-[#909399] hover:bg-[#909399] text-[#909399] hover:text-white"
          :to="{ name: 'exercise', params: { classId: examData.value.category.slug } }"
          >
            <Icon icon="pi-send"/>
            Làm các đề khác
          </router-link>
        </div>
      </div>

      <div v-else-if="!loadingStore.isLoading && isShowResults">
        <Results
          :slug="examData.value.category.slug"
          :results="resultsData.value"
          @change-show-results="isShowResults=false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { watch, reactive, ref } from "vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";
  import { useLoadingStore } from "@/store/loading";
  import { toast } from 'vue3-toastify';
  import Title from "@/components/DoExercise/Title.vue";
  import Question from "@/components/DoExercise/Question.vue";
  import Results from "@/components/DoExercise/Results.vue";
  import Icon from "@/components/Icon.vue";

  const examData = reactive([]);
  const resultsData = reactive([]);
  const isShowResults = ref(false);
  const isFirstSubmit = ref(false);
  const loadingStore = useLoadingStore();
  const ExamRepository = RepositoryFactory.get("exams");
  const route = useRoute();

  watch(() => [route.path, route.query], async () => {
    const exerciseId = route.params.exerciseId;
    
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

  function handleUpdateAnswer(answer, pageId, questionId) {
    examData.value.exam.pages[pageId].questions[questionId].answer = answer;
    examData.value.exam.pages[pageId].questions[questionId].warning = false;
  } 

  async function submitExam() {
    if (window.confirm("Bạn chắc chắn muốn nộp bài?")) {
      isFirstSubmit.value = true;
      
      // check all questions have answer from user 
      for (const page of examData.value.exam.pages) {
        for (const q of page.questions){
          if (q.warning==null || q.warning==true || !q.answer || q.answer.length <= 0) {
            return toast.warning("Vui lòng trả lời hết các câu hỏi (đang bị bôi đỏ) trước khi nộp bài.", {
              toastStyle: {
                fontSize: '14px',
              },
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        }
      }
  
      // submit answer
      loadingStore.changeLoadingState(true);
      const { data } = await ExamRepository.submit(examData.value.exam);
      loadingStore.changeLoadingState(false);
  
      resultsData.value = data;
  
      isShowResults.value = true;
      toast.success("Nộp bài thành công", {
        toastStyle: {
          fontSize: '14px',
        },
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }

</script>

<style lang="scss">
  .box-shadow {
    box-shadow: 0 0 10px rgba(37, 41, 45, .1);
  }
</style>