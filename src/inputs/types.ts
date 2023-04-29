import type { GestureResponderEvent, TextInputProps, ViewProps } from 'react-native';
import type { InputProps as IP } from 'react-native-elements';
import type { Localized } from '..';
import type { ReactNode, Ref } from 'react';

export interface IColorProfile {
  color?: string;
  primaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  placeholderColor?: string;
  rippleColor?: string;
  textSize?: number;
}

export interface IFieldStyle extends IColorProfile {
  width?: number | string;
  height?: number | string;
}

export interface IInputProps {
  name: string;
  InputProps?: TextInputProps & { maxCount?: number };
  ContainerProps?: ViewProps;
  forwardedRef?: Ref<any>;
}

export interface IInputContent {
  value?: string;
  maxCount?: number;
  placeholder?: string | Localized;
  label?: string | Localized;
  icon?: string;
  rightComp?: ReactNode;
  iconButton?: string;
}

export interface IInputActions {
  onChange?: (input: string) => void;
  onClick?: (event: GestureResponderEvent) => void;
  onWholeClick?: (event: GestureResponderEvent) => void;
}

export interface ICustomTextInput
  extends IInputProps,
    IInputContent,
    IInputActions,
    IFieldStyle {
  inline?: boolean;
}

export interface IGetRightComp {
  primaryColor?: string;
  rightComp?: React.ReactNode;
  iconButton?: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export type TCustomREInputProps = Pick<
  IP,
  'containerStyle' | 'inputContainerStyle' | 'inputStyle'
>;
