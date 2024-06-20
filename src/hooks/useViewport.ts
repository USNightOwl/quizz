import { ref, onMounted, onUnmounted } from 'vue';

export enum DEVICE{
  MOBILE = 'MOBILE',
  TABLET = 'TABLET',
  DESKTOP = 'DESKTOP'
}

export interface DeviceSize {
  mobile: number | null,
  tablet: number | null,
}

export const useViewport = (config: DeviceSize) => {
  const { mobile = null, tablet = null } = config;
  let mobileWidth = mobile ? mobile : 768;
  let tabletWidth = tablet ? tablet : 922;
  let device = ref(getDevice(window.innerWidth));
  function getDevice(width: number) {
    if (width < mobileWidth) {
      return DEVICE.MOBILE;
    } else if (width < tabletWidth) {
      return DEVICE.TABLET;
    }
    return DEVICE.DESKTOP;
  }

  const handleResize = () => {
    device.value = getDevice(window.innerWidth);
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return {
    device
  }
}