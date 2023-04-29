import React from 'react';
import SelectModalWrapper from './SelectModalWrapper';
import type { ICustomSelectInput } from './utils';
import { View } from 'react-native';
import BaseTextInput from '../inputs/BaseTextInput';
import { getOutlineProfile } from '../inputs/utils';

const SelectModal: React.FC<ICustomSelectInput> = (props) => {
  const { primaryColor, InputProps = {}, items, onChange, textColor } = props;
  return (
    <View style={{ marginBottom: 15 }}>
      <SelectModalWrapper onChange={onChange} items={items}>
        <BaseTextInput
          {...props}
          InputProps={{
            ...InputProps,
            editable: false,
          }}
          {...getOutlineProfile({ primaryColor, textColor })}
        />
      </SelectModalWrapper>
    </View>
  );
};
export default SelectModal;
