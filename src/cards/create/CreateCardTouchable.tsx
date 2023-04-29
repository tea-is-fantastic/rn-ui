import React from 'react';
import { StyleProp, TouchableOpacity, View } from 'react-native';
import type { ICreateAdditional } from './util';
import type { ReactFC } from '@tisf/rn-providers';
import { useThemeStore } from '@tisf/rn-providers';

export const CreateCardTouchable: ReactFC<
  { styles?: StyleProp<any> } & ICreateAdditional
> = ({ children, onPress, styles = {} }) => {
  const palette = useThemeStore().palette;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} disabled={!onPress}>
      <View
        style={{
          backgroundColor: 'white',
          borderBottomWidth: 1,
          borderBottomColor: palette.backgroundColor,
          marginBottom: 15,
          overflow: 'hidden',
          borderRadius: 10,
          elevation: 5,
          ...styles,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
