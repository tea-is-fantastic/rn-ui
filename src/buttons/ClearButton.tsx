import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useThemeStore, ReactFC } from '@tisf/rn-providers';

export const ClearButton: ReactFC<TouchableOpacityProps> = (props) => {
  const palette = useThemeStore().palette;
  return (
    <TouchableOpacity {...props}>
      <Text style={{ color: palette.primaryColor, textAlign: 'right' }}>Clear</Text>
    </TouchableOpacity>
  );
};
