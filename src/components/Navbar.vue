<template lang="">
  <div class="text-xs hidden md:flex uppercase font-semibold justify-between items-center flex-1">
    <div class="flex gap-5">
      <div>Đề thi THPT</div>
      <div>Lớp 12</div>
      <div>Lớp 11</div>
      <div>Lớp 10</div>
      <div>Tiếng anh</div>
      <div>Đại học</div>
      <div>Trắc nghiệm tính cách MBTI</div>
    </div>
    <Searchbar/>
  </div>
  <div class="flex md:hidden justify-end flex-1">
    <Icon icon="pi-bars" className="text-xl"/>
  </div>
</template>

<script setup>
  import Searchbar from "@/components/Searchbar.vue";
  import Icon from "@/components/Icon.vue";
</script>