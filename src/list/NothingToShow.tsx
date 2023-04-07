import React from 'react';
import { Text, View } from 'react-native';
import { useThemeStore } from '@tisf/rn-providers';

interface INothingToShow {
  load: () => void;
}

export const NothingToShow: React.FC<INothingToShow> = ({ load }) => {
  const palette = useThemeStore().palette;

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 18, color: palette.disabledColor }}>
        Nothing to show...{' '}
        <Text onPress={load} style={{ color: palette.primaryColor }}>
          Refresh
        </Text>
      </Text>
    </View>
  );
};
