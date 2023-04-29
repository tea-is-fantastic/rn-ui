import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { ICreateHorizontal } from './util';
import type { NavigateToProps } from '@tisf/rn-providers';
import { useThemeStore } from '@tisf/rn-providers';
import { FaLight } from '../../index';
import { CreateCardHorizontal } from './CreateCardHorizontal';

export const CreateCardLink: React.FC<
  ICreateHorizontal & { onPress?: () => void; goTo?: NavigateToProps }
> = ({ onPress, goTo, ...props }) => {
  const navigation = useNavigation<any>();
  const palette = useThemeStore().palette;
  const onPressFinal = () => {
    if (goTo) {
      navigation.navigate(goTo.route, goTo.params || {});
    } else if (onPress) {
      onPress();
    }
  };
  return (
    <CreateCardHorizontal onPress={onPressFinal} {...props}>
      <FaLight name="chevron-right" color={palette.primaryColor} />
    </CreateCardHorizontal>
  );
};
