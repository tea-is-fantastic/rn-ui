import React from 'react';
import { useTheme } from '@react-navigation/native';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useFormikContext } from 'formik';
import { Input } from 'react-native-elements';
import InputCounter from './InputCounter';
import { getTextComp } from './utils';
import { FaLight } from '..';
import { getRightComp } from './components';
import type { ICustomTextInput } from './types';

const CustomTextInputAlt: React.FC<ICustomTextInput> = ({
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
}) => {
  const theme = useTheme();
  const { touched, errors } = useFormikContext<any>() || {};

  const textComp = getTextComp(placeholder);

  const errorn = errors[name];
  const error = errorn && Array.isArray(errorn) ? errorn[0] : errorn;

  return (
    <InputCounter value={value} max={InputProps.maxCount}>
      <TouchableWithoutFeedback onPress={onWholeClick} disabled={!onWholeClick}>
        <View pointerEvents={onWholeClick ? 'box-none' : undefined}>
          <Input
            value={value}
            underlineColorAndroid="transparent"
            // @ts-ignore
            placeholder={textComp}
            ref={forwardedRef}
            leftIcon={
              icon ? (
                <FaLight
                  name={icon}
                  size={18}
                  // @ts-ignore
                  color={textColor || theme.colors.disabled}
                />
              ) : undefined
            }
            rightIcon={getRightComp({
              rightComp,
              onClick: onWholeClick || onClick,
              iconButton,
              primaryColor: primaryColor || theme.colors.primary,
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
              // @ts-ignore
              placeholderColor || textColor || theme.colors.disabled
            }
            inputContainerStyle={{
              padding: 0,
              width,
              paddingHorizontal: 0,
              borderBottomWidth: 0,
            }}
            inputStyle={{
              paddingHorizontal: 0,
              width,
              // @ts-ignore
              color: textColor || theme.colors.disabled,
              justifyContent: 'flex-start',
            }}
            textAlignVertical="top"
            style={{
              padding: 0,
              paddingHorizontal: 0,
              fontSize: 16,
              textAlignVertical: 'top',
              // @ts-ignore
              backgroundColor: 'transparent',
            }}
            containerStyle={{
              backgroundColor,
              width,
              padding: 0,
              paddingHorizontal: 0,
            }}
            selectionColor={primaryColor}
            onChangeText={onChange}
            errorMessage={error as string}
            renderErrorMessage={!!(touched[name] && errors[name])}
            errorStyle={{
              color: 'red',
            }}
            {...InputProps}
          />
        </View>
      </TouchableWithoutFeedback>
    </InputCounter>
  );
};
export default CustomTextInputAlt;
