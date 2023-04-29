import React, { PropsWithChildren } from 'react';
import { useFormikContext } from 'formik';
import SelectModalRendered from '../selects/SelectModalRendered';
import type { IThemedInput } from './AltInput';
import type { ICustomSelectInput } from '../selects/utils';
import { getColorProfile } from './utils';

export const ThemedSelectModal = React.forwardRef<
  React.Ref<any>,
  PropsWithChildren<IThemedInput & ICustomSelectInput>
>(
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { mode, name, onClick, title, InputProps = {}, children, ...props },
    ref
  ) => {
    const { handleBlur, handleChange, values } =
      useFormikContext<Record<string, string>>();
    const colorProfile = getColorProfile(mode);

    return (
      <SelectModalRendered
        {...props}
        name={name}
        width="100%"
        placeholder={title}
        backgroundColor={colorProfile.backgroundColor}
        textColor={colorProfile.textColor}
        // @ts-ignore
        primaryColor={colorProfile.primaryColor}
        onChange={handleChange(name)}
        value={values[name]}
        InputProps={{
          ...InputProps,
          onBlur: handleBlur(name),
          blurOnSubmit: false,
        }}
        forwardedRef={ref}
      >
        {children}
      </SelectModalRendered>
    );
  }
);
