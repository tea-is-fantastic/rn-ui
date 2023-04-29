import React from 'react';
import { getOutlineProfile } from './utils';
import InputWrapper from './InputWrapper';
import BaseTextInput from './BaseTextInput';
import type { ICustomTextInput } from './types';
import { View } from 'react-native';

const CustomTextInput: React.FC<ICustomTextInput> = (props) => {
  const { onWholeClick, primaryColor, textColor } = props;
  return (
    <View style={{ marginBottom: 15 }}>
      <InputWrapper onWholeClick={onWholeClick}>
        <BaseTextInput
          {...props}
          {...getOutlineProfile({ primaryColor, textColor })}
        />
      </InputWrapper>
    </View>
  );
};
export default CustomTextInput;
