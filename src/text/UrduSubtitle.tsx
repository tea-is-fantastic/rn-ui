import React from 'react';
import { Text } from 'react-native-paper';
import type { ReactFC } from '@tisf/rn-providers';

export const UrduSubtitle: ReactFC = ({children}) => {
  return (
    <Text
      variant="titleLarge"
      style={{
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'urdu',
        textAlign: 'center',
        marginBottom: 30,
      }}>
      {children}
    </Text>
  );
};
