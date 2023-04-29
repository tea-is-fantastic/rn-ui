import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import type { ICustomTextInput } from './types';
import type { ReactFC } from '@tisf/rn-providers';

type TInputWrapper = Pick<ICustomTextInput, 'onWholeClick'>;

const InputWrapper: ReactFC<TInputWrapper> = ({ onWholeClick, children }) => {
  return (
    <TouchableWithoutFeedback onPress={onWholeClick} disabled={!onWholeClick}>
      <View pointerEvents={onWholeClick ? 'box-none' : undefined}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};
export default InputWrapper;
