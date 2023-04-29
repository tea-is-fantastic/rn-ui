import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { HelperText } from 'react-native-paper';
import type { ICreateHorizontal } from './util';
import type { ReactFC } from '@tisf/rn-providers';
import { EnglishUrduRow, LocalizedConfig } from '../../index';
import { CreateCard } from './CreateCard';

export const CreateCardHorizontal: ReactFC<ICreateHorizontal> = ({
  loc,
  children,
  error,
  others,
  style = {},
  onPress,
  dark,
  color,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} disabled={!onPress}>
      <CreateCard color={color}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            ...style,
          }}
        >
          <View style={{ flex: 1 }}>
            <EnglishUrduRow
              loc={loc}
              config={
                new LocalizedConfig({
                  style: {
                    fontSize: 14,
                    lineHeight: 21,
                    color: dark ? 'white' : undefined,
                  },
                  maxLines: 1,
                })
              }
            />
          </View>
          <View style={{ flex: 1, marginLeft: 10, alignItems: 'flex-end' }}>
            {children}
          </View>
        </View>
        {error && (
          <HelperText style={{ color: 'red' }} type="error">
            {error}
          </HelperText>
        )}
        {others}
      </CreateCard>
    </TouchableOpacity>
  );
};
