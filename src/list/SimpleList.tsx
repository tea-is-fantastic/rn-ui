import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';
import { Heading } from '@tisf/rn-ui';

export interface ISimpleListProps {
  heading: React.ReactNode | string;
  data: any[];
  Component: React.ComponentType<any>;
}

export const SimpleList: React.FC<ISimpleListProps> = ({
  heading,
  data,
  Component,
}) => {
  return (
    <FlashList
      ListHeaderComponent={
        <View
          style={{
            paddingHorizontal: 5,
            paddingTop: 15,
          }}
        >
          {typeof heading === 'string' ? <Heading>{heading}</Heading> : heading}
        </View>
      }
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return <Component data={item} key={index} />;
      }}
      estimatedItemSize={5}
      data={data}
    />
  );
};
