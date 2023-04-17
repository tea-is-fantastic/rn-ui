import React from 'react';
import FontAwesome5Pro, {
  FontAwesome5ProIconProps,
} from 'react-native-vector-icons/FontAwesome5Pro';
import { useThemeStore } from '@tisf/rn-providers';

type IFaProps = Omit<FontAwesome5ProIconProps, 'solid' | 'light'>;

export const FaLight: React.FC<IFaProps> = (props) => {
  const palette = useThemeStore().palette;
  return (
    <FontAwesome5Pro color={palette.primaryColor} size={18} light {...props} />
  );
};

export const FaSolid: React.FC<IFaProps> = (props) => {
  const palette = useThemeStore().palette;
  return (
    <FontAwesome5Pro color={palette.primaryColor} size={18} solid {...props} />
  );
};
