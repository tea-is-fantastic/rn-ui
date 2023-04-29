import React from 'react';
import { ColorValue, View } from 'react-native';
import type { ReactFC } from '@tisf/rn-providers';

export const CreateCardMedia: ReactFC<{
  color?: ColorValue;
  media: React.ReactNode;
}> = ({ children, media, color }) => {
  return (
    <View
      style={{
        backgroundColor: color || 'white',
        marginBottom: 15,
        borderRadius: 10,
        elevation: 5,
      }}
    >
      {media}
      <View
        style={{
          padding: 10,
        }}
      >
        {children}
      </View>
    </View>
  );
};
