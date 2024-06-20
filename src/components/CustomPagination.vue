<template lang="">
  <div class="flex items-center justify-center" v-if="props.totalItems > 0">
    <vue-awesome-paginate
      :total-items="props.totalItems"
      :items-per-page="props.perpage"
      :max-pages-shown="3"
      v-model="page"
      :on-click="onClickHandler"
    />
  </div>
</template>

<script setup>
  import router from "@/router";
  import { ref, watch } from "vue";
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const props = defineProps({
    perPage: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    }
  });

  const onClickHandler = (page) => {
    const classId = route.params.classId;
    router.push({ name: "exercise", params: { classId }, query: {
      page,
    }})
  };

  const page = ref(1);

  watch(() => props.currentPage, () => {
    page.value = props.currentPage;
  },{ immediate: true })
  
</script>

<style lang="scss">
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
    &:hover{
      background-color: #d8d8d8;
    }
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
    &:hover{
      background-color: #2988c8;
    }
  }

  @media only screen and (max-width: 600px) {
    .paginate-buttons{
      width: 32px;
      height: 32px;
      font-size: 0.8rem;
    }
  }
</style>