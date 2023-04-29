import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';

export interface IInputCounter {
  value?: string;
  max?: number;
}

const isValid = (
  value: string,
  max: number
): { bool: boolean; length: number } => {
  const { length } = value || '';
  return { bool: length <= max, length };
};
const InputCounter: React.FC<IInputCounter> = ({ children, value, max }) => {
  const isVal = React.useMemo(() => {
    return max ? isValid(value || '', max) : null;
  }, [max, value]);

  const theme = useTheme();

  return (
    <View style={{ alignItems: 'stretch' }}>
      {children}
      {max && (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text
            style={{
              fontSize: 10,
              // @ts-ignore
              color: isVal.bool ? theme.colors.disabled : 'red',
            }}
          >
            {isVal?.length || 0} / {max}
          </Text>
        </View>
      )}
    </View>
  );
};
export default InputCounter;
