import React from 'react';
import { useFormikContext } from 'formik';
import SelectModal from '../selects/SelectModal';
import type { IThemedInput } from './AltInput';
import type { ICustomSelectInput } from '../selects/utils';
import { getColorProfile } from './utils';
import type { TextInput } from 'react-native';

export const OutlineSelect = React.forwardRef<
  TextInput,
  IThemedInput & ICustomSelectInput
>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ mode, name, onClick, title, InputProps = {}, ...props }, ref) => {
    const { handleBlur, handleChange, values } = useFormikContext();
    const colorProfile = getColorProfile(mode);

    return (
      <SelectModal
        {...props}
        name={name}
        width="100%"
        placeholder={title}
        backgroundColor={colorProfile.backgroundColor}
        textColor={colorProfile.textColor}
        // @ts-ignore
        primaryColor={colorProfile.primaryColor}
        onChange={handleChange(name)}
        value={(values as any)[name]}
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
