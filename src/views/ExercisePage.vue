<template lang="">
  <div v-if="examsData.value && examsData.value.exams">
    <ListBox 
      :exams = "examsData.value.exams"
    />
  </div>
</template>

<script setup>
  import ListBox from "@/components/ListBox.vue";
  import { useRoute } from 'vue-router';
  import { computed, watch, reactive } from "vue";
  import { RepositoryFactory } from "@/api/RepositoryFactory";
  import { useLoadingStore } from "@/store/loading";

  const loadingStore = useLoadingStore();
  const examsData = reactive([]);

  const route = useRoute();
  watch(() => route.path, async () => {
    const classId = route.params.classId;
    const ExamRepository = RepositoryFactory.get("exams");

    loadingStore.changeLoadingState(true);
    const { data } = await ExamRepository.get(classId);
    loadingStore.changeLoadingState(false);
    
    examsData.value = data;
  }, { immediate: true });
  
  
</script>