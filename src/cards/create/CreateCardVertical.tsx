import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import type { ICreateHorizontal } from './util';
import type { ReactFC } from '@tisf/rn-providers';
import { EnglishUrduRow, LocalizedConfig } from '../../index';
import { CreateCard } from './CreateCard';

export const CreateCardVertical: ReactFC<ICreateHorizontal> = ({
  children,
  loc,
  style = {},
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} disabled={!onPress}>
      <CreateCard>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            ...style,
          }}
        >
          <EnglishUrduRow
            loc={loc}
            config={
              new LocalizedConfig({
                style: {
                  fontSize: 14,
                  lineHeight: 21,
                },
                maxLines: 1,
              })
            }
          />
          <View style={{ marginTop: 5 }}>{children}</View>
        </View>
      </CreateCard>
    </TouchableOpacity>
  );
};
