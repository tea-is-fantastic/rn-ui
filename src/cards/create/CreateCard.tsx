import React from 'react';
import { ColorValue, View } from 'react-native';
import type { ReactFC } from '@tisf/rn-providers';
import { useThemeStore } from '@tisf/rn-providers';

export const CreateCard: ReactFC<{ color?: ColorValue }> = ({
  children,
  color,
}) => {
  const palette = useThemeStore().palette;
  return (
    <View
      style={{
        backgroundColor: color || 'white',
        borderBottomWidth: 1,
        borderBottomColor: palette.backgroundColor,
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        elevation: 5,
      }}
    >
      {children}
    </View>
  );
};
