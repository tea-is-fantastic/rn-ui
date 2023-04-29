import React from 'react';
import { View } from 'react-native';
import type { ReactFC } from '@tisf/rn-providers';
import type { ICustomSelectInput } from './utils';
import ModalMenu from '../ui/ModalMenu';

export type TSelectWrapper = Pick<ICustomSelectInput, 'onChange' | 'items'> & {
  forwardedRef?: React.Ref<any>;
};

const SelectModalWrapper: ReactFC<TSelectWrapper> = ({
  onChange,
  items,
  children,
  forwardedRef,
}) => {
  return (
    <ModalMenu
      ref={forwardedRef}
      items={items}
      width="full"
      onSelect={(v, closeFunc) => {
        onChange && onChange(v);
        closeFunc();
      }}
    >
      <View pointerEvents="none" style={{ width: '100%' }}>
        {children}
      </View>
    </ModalMenu>
  );
};
export default SelectModalWrapper;
