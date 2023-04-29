import React from 'react';
import { useFormikContext } from 'formik';
import type { ICustomTextInput } from '../inputs/types';
import type { IThemedInput } from './AltInput';
import type { TextInput } from 'react-native';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { FaLight } from '@tisf/rn-ui';
import { useThemeStore } from '@tisf/rn-providers';
import { getTextComp } from '../inputs/utils';

export const OutlineInput = React.forwardRef<
  TextInput,
  IThemedInput & ICustomTextInput
>(
  (
    {
      placeholderColor,
      primaryColor,
      textColor,
      icon,
      name,
      title,
      InputProps = {},
    },
    ref
  ) => {
    const { handleBlur, handleChange, values, touched, errors } =
      useFormikContext<Record<string, string>>();
    const error = touched[name] && errors[name];
    const palette = useThemeStore().palette;

    const primColor = primaryColor || palette.primaryColor;

    return (
      <View style={{ marginBottom: 15 }}>
        <Input
          value={(values as any)[name]}
          underlineColorAndroid="transparent"
          placeholder={getTextComp(title)}
          autoComplete="off"
          ref={ref}
          leftIcon={
            icon ? (
              <FaLight
                name={icon}
                size={18}
                color={textColor || palette.disabledColor}
              />
            ) : undefined
          }
          leftIconContainerStyle={{
            width: 26,
            justifyContent: 'center',
          }}
          placeholderTextColor={
            placeholderColor || textColor || palette.disabledColor
          }
          inputContainerStyle={{
            width: '100%',
            borderWidth: 1,
            borderRadius: 5,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 10,
            paddingRight: 10,
            borderColor: primColor,
          }}
          inputStyle={{
            fontSize: 16,
            color: textColor,
          }}
          containerStyle={{
            backgroundColor: 'transparent',
            width: '100%',
          }}
          selectionColor={palette.primaryColor}
          onChangeText={handleChange(name)}
          errorMessage={errors[name]}
          renderErrorMessage={!!error}
          errorStyle={{
            color: 'red',
            // height: error ? 0 : undefined,
          }}
          onBlur={handleBlur(name)}
          blurOnSubmit={false}
          {...InputProps}
        />
      </View>
    );
  }
);
