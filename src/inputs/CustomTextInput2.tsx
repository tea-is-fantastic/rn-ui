import React from 'react';
import { useTheme } from '@react-navigation/native';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useFormikContext } from 'formik';
import { Input } from 'react-native-elements';
import { getTextComp } from './utils';
import { getRightComp } from './components';
import type { ICustomTextInput } from './types';
import { FaLight } from '..';

const CustomTextInput: React.FC<ICustomTextInput> = ({
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
  InputProps = {},
}) => {
  const theme = useTheme();
  const { touched, errors } = useFormikContext<any>() || {};

  const textComp = getTextComp(placeholder);

  const errorn = errors[name];
  const error = errorn && Array.isArray(errorn) ? errorn[0] : errorn;

  return (
    <View
      style={{
        marginBottom: 15,
      }}
    >
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
            // @ts-ignore
            placeholderTextColor={textColor || theme.colors.disabled}
            inputContainerStyle={{
              borderWidth: 1,
              borderRadius: 5,
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 10,
              paddingRight: 10,
              borderColor: primaryColor,
            }}
            style={{
              height: (InputProps?.numberOfLines || 0) > 1 ? undefined : 55,
              paddingLeft: 10,
              paddingRight: 10,
              fontSize: 16,
              // @ts-ignore
              color: textColor || theme.colors.disabled,
              backgroundColor: 'transparent',
            }}
            containerStyle={{
              backgroundColor,
              width,
            }}
            selectionColor={primaryColor}
            onChangeText={onChange}
            errorMessage={
              touched[name] && error ? (error as string) : undefined
            }
            errorStyle={{
              color: 'red',
              height: touched[name] && errors[name] ? 20 : 0,
            }}
            {...InputProps}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default CustomTextInput;
