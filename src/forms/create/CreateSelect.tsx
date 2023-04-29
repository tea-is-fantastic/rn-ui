import React from 'react';
import { Text } from 'react-native';
import { IThemedInput, ThemedSelectDialog } from '../../themed';
import type { ICustomSelectInput } from '../../selects/utils';

export const CreateSelect: React.FC<IThemedInput & ICustomSelectInput> = ({
  forwardedRef,
  ...props
}) => {
  return (
    <ThemedSelectDialog
      {...props}
      ref={forwardedRef}
      renderChildren={(value) => {
        return <Text>{value}</Text>;
      }}
    />
  );
};
