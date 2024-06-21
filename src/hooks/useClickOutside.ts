import { onMounted, onUnmounted, Ref } from 'vue';

export const useClickOutside = (r: Ref , callback = () => {}) => {
  function handleClickOutside(event) {
    if (r.value && !r.value.contains(event.target)) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });
}