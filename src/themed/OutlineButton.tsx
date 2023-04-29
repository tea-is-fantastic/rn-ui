import React from 'react';
import { getColorProfile } from './utils';
import type { ICustomButton } from '../buttons/CustomButton';
import { CustomOutlineButton } from '../buttons/CustomButton';

export interface IOutlineButton extends ICustomButton {
  mode: 'light' | 'dark';
}

export const OutlineButton: React.FC<IOutlineButton> = ({
  mode,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  iconButton,
  ButtonProps = {},
  ...props
}) => {
  const colorProfile = getColorProfile(mode);

  return (
    <CustomOutlineButton
      {...props}
      width="100%"
      backgroundColor={colorProfile.backgroundColor}
      textColor={colorProfile.textColor}
      rippleColor={colorProfile.rippleColor}
      // @ts-ignore
      primaryColor={colorProfile.primaryColor}
      ButtonProps={{
        ...ButtonProps,
      }}
    />
  );
};
