import type { IColorProfile } from '../inputs/types';
import { useThemeStore } from '@tisf/rn-providers';

export function getColorProfile(mode: 'light' | 'dark'): IColorProfile {
  const palette = useThemeStore.getState().palette;
  if (mode === 'dark') {
    return {
      backgroundColor: 'transparent',
      textColor: 'white',
      primaryColor: 'white',
      rippleColor: palette.primaryDarkColor,
    };
  }
  return {
    backgroundColor: 'transparent',
    textColor: palette.primaryColor,
    primaryColor: palette.primaryColor,
    rippleColor: palette.primaryLightColor,
  };
}
