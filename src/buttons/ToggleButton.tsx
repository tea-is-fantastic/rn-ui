import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import type { ICustomButton } from './CustomButton';
import type { IColorProfile } from '../inputs/types';
import { FaLight } from '..';
import { useThemeStore } from '@tisf/rn-providers';

const ToggleButton: React.FC<ICustomButton & { active: boolean }> = ({
  active,
  icon,
  text,
  onClick,
  ...props
}) => {
  const palette = useThemeStore().palette;
  const colorProfile: IColorProfile = active
    ? {
        textColor: 'white',
        primaryColor: palette.primaryColor,
        backgroundColor: palette.primaryColor,
        rippleColor: palette.primaryDarkColor,
      }
    : {
        textColor: palette.primaryColor,
        primaryColor: palette.primaryColor,
        backgroundColor: 'white',
        rippleColor: palette.primaryLightColor,
      };

  const { textColor, primaryColor, rippleColor, backgroundColor } =
    colorProfile;

  const fontSize = 14;
  const iconFinal = (
    <FaLight color={textColor} size={fontSize} name={icon || 'user'} />
  );

  return (
    <Button
      background={TouchableNativeFeedback.Ripple(
        rippleColor || palette.primaryDarkColor,
        false
      )}
      icon={iconFinal}
      containerStyle={{
        borderRadius: 30,
        borderColor: primaryColor,
        borderWidth: 1,
      }}
      buttonStyle={{
        flex: 1,
        backgroundColor,
        width: '100%',
        height: 55,
        minHeight: 55,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      type={active ? undefined : 'outline'}
      // @ts-ignore
      title={text}
      titleStyle={{
        color: textColor,
        fontSize,
        marginLeft: 5,
      }}
      onPress={onClick}
      {...props}
    />
  );
};
export default ToggleButton;
