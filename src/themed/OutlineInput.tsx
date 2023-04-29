import React from 'react';
import { useFormikContext } from 'formik';
import type { ICustomTextInput } from '../inputs/types';
import { getColorProfile } from './utils';
import CustomTextInput from '../inputs/CustomTextInput';
import type { IThemedInput } from './AltInput';
import type { TextInput } from 'react-native';

export const OutlineInput = React.forwardRef<
  TextInput,
  IThemedInput & ICustomTextInput
>(
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { mode, onClick, icon, iconButton, name, title, InputProps = {}, ...props },
    ref
  ) => {
    const { handleBlur, handleChange, values } = useFormikContext();
    const colorProfile = getColorProfile(mode);

    return (
      <CustomTextInput
        {...props}
        name={name}
        width="100%"
        backgroundColor={colorProfile.backgroundColor}
        textColor={colorProfile.textColor}
        // @ts-ignore
        primaryColor={colorProfile.primaryColor}
        onChange={handleChange(name)}
        value={(values as any)[name]}
        placeholder={title}
        icon={icon}
        iconButton={iconButton}
        InputProps={{
          onBlur: handleBlur(name),
          blurOnSubmit: false,
          selection: { start: (values as any)[name]?.length || 0 },
          ...InputProps,
        }}
        forwardedRef={ref}
      />
    );
  }
);
