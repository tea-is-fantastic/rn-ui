import { RefreshControl, RefreshControlProps } from 'react-native';
import React from 'react';
import { useThemeStore } from '@tisf/rn-providers';

export const MyRefreshControl: React.FC<RefreshControlProps> = (props) => {
  const palette = useThemeStore().palette;

  return (
    <RefreshControl
      colors={[palette.primaryColor]}
      progressBackgroundColor="white"
      {...props}
    />
  );
};
