import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useThemeStore } from '@tisf/rn-providers';
import { StampedBox } from '../ui';

interface INothingToShow {
  load: () => void;
}

export const NothingToShow: React.FC<INothingToShow> = ({ load }) => {
  const palette = useThemeStore().palette;

  return (
    <TouchableOpacity onPress={load}>
      <StampedBox>
        <Text style={{ fontSize: 18, color: palette.disabledColor }}>
          Nothing to show...{' '}
          <Text style={{ color: palette.primaryColor }}>Refresh</Text>
        </Text>
      </StampedBox>
    </TouchableOpacity>
  );
};
