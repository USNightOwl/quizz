import { onMounted, onUnmounted } from 'vue';

interface UseKeyboardShortcutArgs {
  key: string;
  onKeyPressed: () => void;
}

export function useKeyboardShortcut({ key, onKeyPressed }: UseKeyboardShortcutArgs) {
  function keyDownHandler(e: globalThis.KeyboardEvent) {
    if (e.key === key) {
      e.preventDefault();
      onKeyPressed();
    }
  }


  onMounted(() => {
    document.addEventListener("keydown", keyDownHandler);
  })

  onUnmounted(() => {
    document.removeEventListener("keydown", keyDownHandler);
  });
}