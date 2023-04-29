import React from 'react';
import { useFormikContext } from 'formik';
import { Input } from 'react-native-elements';
import { getTextComp } from './utils';
import { getRightComp } from './components';
import type { ICustomTextInput, TCustomREInputProps } from './types';
import { FaLight } from '..';
import { useThemeStore } from '@tisf/rn-providers';

const BaseTextInput: React.FC<TCustomREInputProps & ICustomTextInput> = ({
  name,
  placeholder,
  value,
  onChange,
  rightComp,
  icon,
  iconButton,
  onClick,
  onWholeClick,
  forwardedRef,
  width,
  backgroundColor,
  textColor,
  primaryColor,
  placeholderColor,
  InputProps = {},
  containerStyle = {},
  inputContainerStyle = {},
  inputStyle = {},
}) => {
  const theme = useThemeStore();
  const { touched, errors } = useFormikContext<Record<string, string>>() || {};

  const textComp = getTextComp(placeholder);
  const error = touched[name] && errors[name];

  return (
    <Input
      value={value}
      underlineColorAndroid="transparent"
      placeholder={textComp}
      autoComplete="off"
      ref={forwardedRef}
      leftIcon={
        icon ? (
          <FaLight
            name={icon}
            size={18}
            color={textColor || theme.palette.disabledColor}
          />
        ) : undefined
      }
      rightIcon={getRightComp({
        rightComp,
        onClick: onWholeClick || onClick,
        iconButton,
        primaryColor: primaryColor || theme.palette.primaryColor,
      })}
      rightIconContainerStyle={{
        width: 26,
        justifyContent: 'center',
      }}
      leftIconContainerStyle={{
        width: 26,
        justifyContent: 'center',
      }}
      placeholderTextColor={
        placeholderColor || textColor || theme.palette.disabledColor
      }
      inputContainerStyle={{
        width,
        ...(inputContainerStyle as object),
      }}
      inputStyle={{
        fontSize: 16,
        ...(inputStyle as object),
      }}
      containerStyle={{
        backgroundColor,
        width,
        ...(containerStyle as object),
      }}
      selectionColor={primaryColor}
      onChangeText={onChange}
      errorMessage={errors[name]}
      renderErrorMessage={!!error}
      errorStyle={{
        color: 'red',
        // height: error ? 0 : undefined,
      }}
      {...InputProps}
    />
  );
};
export default BaseTextInput;
