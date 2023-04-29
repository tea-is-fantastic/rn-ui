import React from 'react';
import { Text } from 'react-native';
import type { ReactFC } from '@tisf/rn-providers';
import { useThemeStore } from '@tisf/rn-providers';

export const CreateCardInfo: ReactFC = ({ children }) => {
  const palette = useThemeStore().palette;
  return (
    <Text
      style={{
        marginTop: 10,
        fontSize: 12,
        textAlign: 'center',
        color: palette.disabledColor,
      }}
    >
      {children}
    </Text>
  );
};
