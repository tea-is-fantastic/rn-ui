import React from 'react';
import { useFormikContext } from 'formik';
import CustomTextInputAlt from '../inputs/CustomTextInputAlt';
import type { ICustomTextInput } from '../inputs/types';
import type { Localized } from '../locale';
import { getColorProfile } from './utils';
import { useThemeStore } from '@tisf/rn-providers';

export interface IThemedInput extends ICustomTextInput {
  mode: 'light' | 'dark';
  title: string | Localized;
}

export const AltInput = React.forwardRef(
  (
    {
      mode,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onClick,
      name,
      title,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      placeholder,
      InputProps = {},
      ...props
    }: IThemedInput,
    ref: React.Ref<any>
  ) => {
    const { handleBlur, handleChange, values } =
      useFormikContext<Record<string, string>>();
    const colorProfile = getColorProfile(mode);
    const palette = useThemeStore().palette;

    return (
      <CustomTextInputAlt
        {...props}
        name={name}
        placeholder={title}
        backgroundColor={colorProfile.backgroundColor}
        textColor={palette.textColor}
        primaryColor={colorProfile.primaryColor}
        onChange={handleChange(name)}
        value={values[name]}
        placeholderColor={palette.disabledColor}
        InputProps={{
          ...InputProps,
          onBlur: handleBlur(name),
          blurOnSubmit: false,
        }}
        forwardedRef={ref}
      />
    );
  }
);
