import type { ReactNode } from 'react';
import type { ColorValue, StyleProp } from 'react-native';
import type { Localized } from '../../index';

export type ICreateCard = {
  loc: Localized;
  style?: StyleProp<any>;
  dark?: boolean;
  color?: ColorValue;
};
export type ICreateAdditional = {
  others?: ReactNode;
  error?: string;
  onPress?: () => void;
  right?: ReactNode;
};
export type ICreateHorizontal = ICreateCard & ICreateAdditional;
export type ICreatePrim = { styles?: StyleProp<any> } & ICreateAdditional;
