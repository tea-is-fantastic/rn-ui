import { GestureResponderEvent, View } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { FaLight } from '..';

export interface IFALightButton
  extends React.ComponentProps<typeof IconButton> {
  icon: string;
  onPress: (e: GestureResponderEvent) => void;
  size?: number;
}

export const FALightButton: React.FC<IFALightButton> = ({
  icon,
  size: sizeProp,
  ...props
}) => {
  return (
    <View style={{ padding: 10 }}>
      {/* @ts-ignore */}
      <IconButton
        size={sizeProp}
        icon={({ size, color }) => (
          <FaLight name={icon} color={color} size={size} />
        )}
        {...props}
      />
    </View>
  );
};
