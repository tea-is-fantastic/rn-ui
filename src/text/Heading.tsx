import React from 'react';
import { Text } from 'react-native-elements';
import type { TextStyle } from 'react-native';
import { ReactFC, useThemeStore } from '@tisf/rn-providers';

interface IHeading {
  noMarginBottom?: boolean;
  marginTop?: boolean;
  compact?: boolean;
  style?: TextStyle;
}

export const Heading: ReactFC<IHeading> = ({
  children,
  noMarginBottom = false,
  marginTop = false,
  compact = false,
  style = {},
}) => {
  const palette = useThemeStore().palette;
  return (
    <Text
      h4
      h4Style={{
        marginTop: marginTop ? 15 : 0,
        color: palette.primaryColor,
        fontSize: 24,
        marginBottom: noMarginBottom ? 0 : 15,
        lineHeight: compact ? 24 : undefined,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
