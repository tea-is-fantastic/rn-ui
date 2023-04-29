import React from 'react';
import { ButtonProps as BP, TouchableNativeFeedback, View } from 'react-native';
import { Button } from 'react-native-elements';
import type { Localized } from '..';
import { EnglishUrdu, FaLight, LocalizedConfig } from '..';
import type {
  IFieldStyle,
  IInputActions,
  IInputContent,
} from '../inputs/types';
import { useThemeStore } from '@tisf/rn-providers';

export interface ICustomButton
  extends IFieldStyle,
    IInputContent,
    IInputActions {
  text: string | Localized;
  submitting?: boolean;
  ButtonProps?: Partial<BP>;
}

export const CustomOutlineButton: React.FC<ICustomButton> =
  function CustomButton({
    width,
    height,
    backgroundColor,
    submitting,
    textSize,
    text,
    textColor,
    rippleColor,
    primaryColor,
    icon,
    onClick,
    ButtonProps = {},
  }) {
    const palette = useThemeStore().palette;
    const disabled = ButtonProps?.disabled || submitting;
    let textComp: React.ReactNode;
    const fontSize = textSize || 16;
    if (typeof text === 'string') {
      textComp = text;
    } else {
      const config = new LocalizedConfig({
        style: { fontSize, color: textColor },
      });
      textComp = <EnglishUrdu loc={text} config={config} />;
    }

    let iconFinal;

    if (icon) {
      iconFinal = <FaLight color={textColor} size={fontSize} name={icon} />;
    }

    return (
      <View
        style={{
          marginBottom: 15,
        }}
      >
        <Button
          disabled={disabled}
          background={TouchableNativeFeedback.Ripple(
            rippleColor || palette.primaryDarkColor,
            false
          )}
          icon={iconFinal}
          buttonStyle={{
            flex: 1,
            backgroundColor,
            width: width || '100%',
            height: height || 55,
            minHeight: height || 55,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: primaryColor,
            borderWidth: 1,
            borderRadius: 10,
          }}
          disabledStyle={{
            borderColor: primaryColor,
          }}
          loadingProps={{ color: primaryColor }}
          type="outline"
          // @ts-ignore
          title={textComp}
          titleStyle={{
            color: primaryColor,
            fontSize,
          }}
          disabledTitleStyle={{
            color: textColor,
          }}
          onPress={onClick}
          loading={submitting}
          {...ButtonProps}
        />
      </View>
    );
  };
