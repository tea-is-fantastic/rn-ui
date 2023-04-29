import React, { PropsWithChildren } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import { useThemeStore } from '@tisf/rn-providers';
import { FaLight } from '..';
import type { IDateTimeRef } from '../themed/DateTimeInput';

export interface IModalMenuItem {
  label?: string;
  value?: string;
  icon?: string;
  isDivider?: boolean;
}

export interface IDialogMenu {
  items: IModalMenuItem[];
  onPress?: () => void;
  onLongPress?: () => void;
  onSelect: (value: string, closeFunc: () => void) => void;
}

const renderMenuItem = (item: IModalMenuItem): React.ReactNode => {
  const palette = useThemeStore.getState().palette;
  const { icon, label, value, isDivider } = item;
  if (isDivider) {
    return (
      <View
        key={`menu-divider-${label}`}
        style={{
          marginVertical: 5,
          marginHorizontal: 2,
          borderBottomWidth: 1,
          borderColor: palette.backgroundColor,
        }}
      />
    );
  }
  return (
    <View
      key={`menu-${value}`}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      }}
    >
      {icon && (
        <View style={{ marginRight: 15, width: 20, alignItems: 'center' }}>
          <FaLight name={icon} size={16} />
        </View>
      )}
      <View>
        <Text style={{ fontSize: 16 }}>{label}</Text>
      </View>
    </View>
  );
};

const DialogMenu = React.forwardRef<
  React.Ref<IDateTimeRef>,
  PropsWithChildren<IDialogMenu>
>(({ items, onSelect, onPress, onLongPress, children }, ref) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const openFunc = () => setOpen(true);
  const closeFunc = () => setOpen(false);

  const palette = useThemeStore().palette;

  const onPressFunc = () => {
    if (onPress) {
      onPress();
    } else {
      openFunc();
    }
  };
  // @ts-ignore
  React.useImperativeHandle(ref, () => ({
    show: openFunc,
  }));
  const onLongPressFunc = () => {
    onPress || (!onLongPress ? openFunc() : onLongPress());
  };
  return (
    <ModalSelector
      visible={open}
      backdropPressToClose
      onModalClose={closeFunc}
      keyExtractor={(item) => item.value}
      labelExtractor={(item) => item.label || ''}
      componentExtractor={renderMenuItem}
      onChange={(v) => {
        onSelect(v.value || '', closeFunc);
      }}
      animationType="fade"
      optionContainerStyle={{
        backgroundColor: 'white',
        borderTopStartRadius: 20,
        borderBottomEndRadius: 20,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderLeftColor: palette.primaryColor,
        borderRightColor: palette.primaryColor,
      }}
      cancelStyle={{
        padding: 15,
        backgroundColor: 'white',
      }}
      data={items}
    >
      <TouchableOpacity onPress={onPressFunc} onLongPress={onLongPressFunc}>
        {children}
      </TouchableOpacity>
    </ModalSelector>
  );
});
export default DialogMenu;
