import React from 'react';
import type { IGetRightComp } from './types';
import type { InputProps } from 'react-native-elements';
import { FaLight } from '..';

// @ts-ignore
export const getRightComp: (vars: IGetRightComp) => InputProps['rightIcon'] = ({
  rightComp,
  onClick,
  iconButton,
  primaryColor,
}) => {
  if (iconButton) {
    return (
      <FaLight
        onPress={onClick}
        name={iconButton}
        size={18}
        color={primaryColor}
      />
    );
  }

  if (rightComp) {
    return rightComp;
  }
  return undefined;
};
