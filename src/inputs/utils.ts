import type { Localized } from '..';
import type { IColorProfile, TCustomREInputProps } from './types';

export const getTextComp: (
  placeholder: string | Localized | undefined
) => string | undefined = (placeholder) => {
  if (!placeholder) {
    return undefined;
  }
  if (typeof placeholder === 'string') {
    return placeholder;
  }
  return `${placeholder.enUS} ${placeholder.urPK}`;
};

export const getOutlineProfile = ({
  primaryColor,
  textColor,
}: IColorProfile): TCustomREInputProps => {
  return {
    inputStyle: {
      color: textColor,
    },
    inputContainerStyle: {
      borderWidth: 1,
      borderRadius: 5,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 10,
      paddingRight: 10,
      borderColor: primaryColor,
    },
    // style={{
    //   height: InputProps.numberOfLines > 1 ? undefined : 55,
    //   paddingLeft: 10,
    //   paddingRight: 10,
    //   fontSize: 16,
    //   // @ts-ignore
    //   color: textColor || theme.colors.disabled,
    //   backgroundColor: 'transparent',
    // }}
  };
};

export const getHeadlessProfile = ({
  textColor,
}: IColorProfile): TCustomREInputProps => {
  return {
    inputContainerStyle: {
      padding: 0,
      width: '100%',
      paddingHorizontal: 0,
      borderBottomWidth: 0,
    },
    inputStyle: {
      paddingHorizontal: 0,
      fontSize: 14,
      width: '100%',
      // @ts-ignore
      color: textColor,
      justifyContent: 'flex-start',
      textAlignVertical: 'top',
    },
    // style={{
    //   padding: 0,
    //   paddingHorizontal: 0,
    //   fontSize: 16,
    //   textAlignVertical: 'top',
    //   // @ts-ignore
    //   backgroundColor: 'transparent',
    // }}
    containerStyle: {
      padding: 0,
      paddingHorizontal: 0,
    },
  };
};
