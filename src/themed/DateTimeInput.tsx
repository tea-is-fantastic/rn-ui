import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

import { useFormikContext } from 'formik';
import DateTimePickerModal, {
  DateTimePickerProps,
} from 'react-native-modal-datetime-picker';
import { getTextComp } from '../inputs/utils';
import type { ICustomTextInput } from '../inputs/types';

type IDateTimeInput = ICustomTextInput & {
  minDate: DateTimePickerProps['minimumDate'];
  maxDate: DateTimePickerProps['maximumDate'];
  mode?: DateTimePickerProps['mode'];
};

export interface IDateTimeRef {
  show: () => void;
}

export const DateTimeInput = React.forwardRef<
  React.Ref<IDateTimeRef>,
  IDateTimeInput
>(
  (
    {
      name,
      placeholder,
      width,
      backgroundColor,
      textColor,
      InputProps = {},
      ContainerProps = {},
      minDate,
      maxDate,
      mode = 'datetime',
    },
    ref
  ) => {
    const { setFieldValue, values } =
      useFormikContext<Record<string, string>>() || {};
    const [open, setOpen] = React.useState<boolean>(false);

    const textComp = getTextComp(placeholder);
    const value = React.useMemo(
      () =>
        values[name] &&
        moment(values[name]).format(
          mode === 'date' ? 'DD MMM YYYY' : 'DD/MM/YYYY hh:mma'
        ),
      [mode, name, values]
    );

    // const minDate: Date = React.useMemo(
    //   () => moment().add(2, 'd').toDate(),
    //   [],
    // );
    //
    // const maxDate: Date = React.useMemo(
    //   () => moment().add(30, 'd').toDate(),
    //   [],
    // );
    //
    const _showPicker = () => setOpen(true);
    const _hidePicker = () => setOpen(false);

    // @ts-ignore
    React.useImperativeHandle(ref, () => ({
      show: _showPicker,
    }));

    return (
      <View
        {...ContainerProps}
        style={{
          backgroundColor,
          width: width || '100%',
          ...((ContainerProps.style || {}) as object),
        }}
      >
        <TouchableOpacity
          onPress={_showPicker}
          style={{ alignSelf: 'stretch' }}
        >
          <Text
            {...InputProps}
            style={{
              color: textColor,
              backgroundColor,
              textAlign: 'right',
              ...((InputProps.style || {}) as object),
            }}
          >
            {value || textComp}
          </Text>
          <DateTimePickerModal
            isVisible={open}
            mode={mode}
            onConfirm={(date) => setFieldValue(name, date)}
            onCancel={_hidePicker}
            onHide={_hidePicker}
            minimumDate={minDate}
            maximumDate={maxDate}
          />
        </TouchableOpacity>
      </View>
    );
  }
);
