import React from 'react';
import { KeyboardAvoidingView, ViewStyle } from 'react-native';
import { IThemedInput, AltInput } from '../../themed';
import type { ICustomTextInput } from '../../inputs/types';

export const CreateInput: React.FC<IThemedInput & ICustomTextInput> = ({
  forwardedRef,
  inline,
  ...props
}) => {
  let style: ViewStyle = { flex: 2 };
  if (inline) {
    style = {
      flex: 2,
      paddingHorizontal: 5,
      marginVertical: -10,
      width: '100%',
    };
  }
  return (
    <KeyboardAvoidingView style={style} behavior="height">
      <AltInput {...props} ref={forwardedRef} />
    </KeyboardAvoidingView>
  );
};
