import React from 'react';
import { View } from 'react-native';
import type { ReactFC } from '@tisf/rn-providers';
import type { TSelectWrapper } from './SelectModalWrapper';
import DialogMenu from '../ui/DialogMenu';

const SelectDialogWrapper: ReactFC<TSelectWrapper> = ({
  onChange,
  items,
  children,
  forwardedRef,
}) => {
  return (
    <DialogMenu
      ref={forwardedRef}
      items={items}
      onSelect={(v, closeFunc) => {
        onChange && onChange(v);
        closeFunc();
      }}
    >
      <View pointerEvents="none" style={{ width: '100%' }}>
        {children}
      </View>
    </DialogMenu>
  );
};
export default SelectDialogWrapper;
