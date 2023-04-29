import React, { PropsWithChildren } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Menu, {
  MenuOption,
  MenuOptions,
  MenuTrigger,
  MenuTriggerProps,
} from 'react-native-popup-menu';
import { useTheme } from '@react-navigation/native';
import { useThemeStore } from '@tisf/rn-providers';
import { FaLight } from '..';
import type { IDateTimeRef } from '../themed/DateTimeInput';

const fullWidth = Dimensions.get('window').width;
type TMenuWidth = 'wide' | 'full';

function getWidth(width?: TMenuWidth): number | undefined {
  switch (width) {
    case 'wide':
      return fullWidth * 0.75;
    case 'full':
      return fullWidth * 0.96;
    default:
      return fullWidth * 0.5;
  }
}

export interface IModalMenuItem {
  label?: string;
  value?: string;
  icon?: string;
  isDivider?: boolean;
}

type OnSelect = (value: string, closeFunc: () => void) => void;

export interface IModalMenu {
  items: IModalMenuItem[];
  width?: TMenuWidth;
  onPress?: () => void;
  onLongPress?: () => void;
  triggerOptions?: MenuTriggerProps;
  onSelect: OnSelect;
}

const renderMenuItems = (items: IModalMenuItem[]): React.ReactNode[] => {
  const palette = useThemeStore.getState().palette;
  return items.map((item, index) => {
    const { icon, label, value, isDivider } = item;
    if (isDivider) {
      return (
        <View
          key={`menu-${index}`}
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
      <MenuOption
        key={`menu-${index}`}
        value={value}
        customStyles={{
          optionWrapper: { padding: 15 },
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
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
      </MenuOption>
    );
  });
};

const ModalMenu = React.forwardRef<
  React.Ref<IDateTimeRef>,
  PropsWithChildren<IModalMenu>
>(
  (
    {
      items,
      onSelect,
      width,
      onPress,
      onLongPress,
      triggerOptions = {},
      children,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const openFunc = () => setOpen(true);
    const closeFunc = () => setOpen(false);
    const theme = useTheme();
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
      <>
        {/* @ts-ignore */}
        <Menu
          opened={open}
          onBackdropPress={closeFunc}
          onSelect={(v: string) => {
            onSelect(v, closeFunc);
          }}
        >
          <MenuTrigger
            onPress={onPressFunc}
            onAlternativeAction={onLongPressFunc}
            {...triggerOptions}
          >
            {children}
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: {
                width: getWidth(width),
                borderTopStartRadius: 20,
                borderBottomEndRadius: 20,
                borderLeftWidth: 5,
                borderRightWidth: 5,
                borderLeftColor: theme.colors.primary,
                borderRightColor: theme.colors.primary,
              },
            }}
          >
            {renderMenuItems(items)}
          </MenuOptions>
        </Menu>
      </>
    );
  }
);
export default ModalMenu;
