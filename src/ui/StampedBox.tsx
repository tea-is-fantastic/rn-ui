import React from 'react';
import { Text, View } from 'react-native';
import { useThemeStore } from '@tisf/rn-providers';
import type { Palette } from '@tisf/rn-providers/lib/typescript/shared/theme/palette';

interface IStampedBox {
  color?: keyof Palette;
}

export const StampedBox: React.FC<IStampedBox> = ({
  color = 'disabledLightColor',
}) => {
  const palette = useThemeStore().palette;

  return (
    <View
      style={{
        flex: 1,
        borderRadius: 16,
        borderBottomLeftRadius: 24,
        borderTopRightRadius: 24,
        overflow: 'hidden',
        backgroundColor: palette[color],
        paddingBottom: 6,
        paddingRight: 4,
      }}
    >
      <View
        style={{
          padding: 10,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Text style={{ fontSize: 18, color: palette.disabledColor }}>
          Nothing to show...{' '}
          <Text style={{ color: palette.primaryColor }}>Refresh</Text>
        </Text>
      </View>
    </View>
  );
};
