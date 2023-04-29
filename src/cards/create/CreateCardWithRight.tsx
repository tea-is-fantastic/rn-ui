import React from 'react';
import { View } from 'react-native';
import type { ICreateAdditional, ICreateCard } from './util';
import type { ReactFC } from '@tisf/rn-providers';
import { EnglishUrduRow, LocalizedConfig } from '../../index';
import { CreateCard } from './CreateCard';

export const CreateCardWithRight: ReactFC<ICreateCard & ICreateAdditional> = ({
  children,
  loc,
  right,
  style = {},
}) => {
  return (
    <CreateCard>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          ...style,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'stretch',
          }}
        >
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'flex-start',
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
          </View>
          <View style={{ flex: 1 }}>{right}</View>
        </View>
        <View style={{ marginTop: 5 }}>{children}</View>
      </View>
    </CreateCard>
  );
};
