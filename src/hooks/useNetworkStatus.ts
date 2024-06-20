import { onMounted, onUnmounted } from 'vue';

export enum NetWorkStatus {
  ONLINE = "online",
  OFFLINE = "offline",
} 

export const useNetworkStatus = (callback = (_status: NetWorkStatus) => { }) => {
  const updateOnlineStatus = () => {
    const status: NetWorkStatus = navigator.onLine ? NetWorkStatus.ONLINE : NetWorkStatus.OFFLINE;
    callback(status);
  }

  onMounted(() => {
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  });

  onUnmounted(() => {
    window.removeEventListener('online', updateOnlineStatus);
    window.removeEventListener('offline', updateOnlineStatus);
  })
}