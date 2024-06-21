<template lang="">
  <div v-if="examsData.value && examsData.value.exams">
    <ListBox 
      :exams = "examsData.value.exams"
      :current-page ="currentPage"
    />
  </div>
</template>

<script setup>
  import ListBox from "@/components/ListBox.vue";
  import { useRoute } from 'vue-router';
  import { watch, reactive, ref } from "vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";
  import { useLoadingStore } from "@/store/loading";

  const ExamRepository = RepositoryFactory.get("exams");
  const loadingStore = useLoadingStore();
  const examsData = reactive([]);
  const currentPage = ref(1);

  const route = useRoute();
  watch(() => [route.path, route.query], async () => {
    const classId = route.params.classId;
    try {
      currentPage.value = parseInt(route.query.page);
      if (isNaN(currentPage.value)) throw new Error();
    } catch (error) {
      currentPage.value = 1;
    }

    loadingStore.changeLoadingState(true);
    const { data } = await ExamRepository.get(classId, currentPage.value);
    loadingStore.changeLoadingState(false);

    examsData.value = data;
  }, { immediate: true });
</script>