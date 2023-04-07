import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';
import { Heading } from '@tisf/rn-ui';

export interface ISimpleListProps {
  heading: string;
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
          <Heading>{heading}</Heading>
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
