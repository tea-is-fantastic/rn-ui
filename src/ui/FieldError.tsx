import React from 'react';
import { HelperText } from 'react-native-paper';
import { useFormikContext } from 'formik';

export const FormFieldError: React.FC<{ name: string }> = ({ name }) => {
  const { touched, errors } = useFormikContext<Record<string, string>>();
  return touched[name] && errors[name] ? (
    <HelperText
      style={{
        color: 'red',
      }}
      type="error"
    >
      {errors[name]}
    </HelperText>
  ) : (
    <></>
  );
};

export const FieldError: React.FC<{
  name: string;
  touched?: boolean;
  error?: string;
}> = ({ error, touched, name }) => {
  if (name) {
    return <FormFieldError name={name} />;
  }
  return touched && error ? (
    <HelperText
      style={{
        color: 'red',
      }}
      type="error"
    >
      {error}
    </HelperText>
  ) : (
    <></>
  );
};
