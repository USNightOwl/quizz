<template lang="">
  <div class="flex items-center justify-center md:mt-10 mt-6" v-if="props.totalItems > 0">
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
  import { ref, watch } from "vue";

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
    },
    func: {
      type: Function,
    }
  });

  const onClickHandler = (page) => {
    props.func(page);
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
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border-radius: 2px;
    font-weight: 500;
    color: #606266;
    &:hover{
      background-color: #d8d8d8;
    }
  }
  .active-page {
    background-color: #67c23a;
    color: white;
    &:hover{
      background-color: #70d33e;
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