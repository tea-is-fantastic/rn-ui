import React from 'react';
import InputCounter from './InputCounter';
import { getHeadlessProfile } from './utils';
import InputWrapper from './InputWrapper';
import BaseTextInput from './BaseTextInput';
import type { ICustomTextInput } from './types';
import { useThemeStore } from '@tisf/rn-providers';

const CustomTextInputAlt: React.FC<ICustomTextInput> = (props) => {
  const { onWholeClick, value, maxCount, textColor } = props;
  const theme = useThemeStore().palette;
  return (
    <InputCounter value={value} max={maxCount}>
      <InputWrapper onWholeClick={onWholeClick}>
        <BaseTextInput
          {...props}
          value={value}
          {...getHeadlessProfile({
            textColor: textColor || theme.disabledColor,
          })}
        />
      </InputWrapper>
    </InputCounter>
  );
};
export default CustomTextInputAlt;
