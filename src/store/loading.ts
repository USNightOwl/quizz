import { defineStore } from 'pinia';

interface LoadingState {
  isLoading: boolean;
};

export const useLoadingStore = defineStore({
  id: "loading",
  
  state: ():LoadingState => ({
    isLoading: false,
  }),

  getters: {

  },

  actions: {
    changeLoadingState(_isLoading: boolean) {
      this.isLoading = _isLoading;
      if (_isLoading) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "scroll";
      }
    }
  }
});