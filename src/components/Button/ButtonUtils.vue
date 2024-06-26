<template lang="">
  <button
    :class="cn('border rounded px-4 py-2 hover:text-white flex items-center justify-center gap-2 transition ease-linear w-full md:w-fit', props.className)"
    @click="props.func"
  >
    <slot/>
  </button>
</template>

<script setup>
  import { cn } from "@/utils/cn";

  const props = defineProps({
    className: {
      type: String,
    },
    func: {
      type: Function,
      required: true
    }
  })
</script>