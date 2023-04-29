import type { TextStyle } from 'react-native';
import { useThemeStore } from '@tisf/rn-providers';

export class Localized {
  readonly enUS: string;
  readonly urPK?: string;

  constructor(enUS: string, urPK?: string) {
    this.enUS = enUS;
    this.urPK = urPK;
  }

  equals = (other: string | Localized): boolean => {
    if (typeof other === 'string') {
      return other === this.enUS;
    }
    return other.enUS === this.enUS;
  };

  toString = (): string => {
    let str = this.enUS;
    if (this.urPK) {
      str = `${str} ${this.urPK}`;
    }
    return str;
  };
}

export class LocalizedStyle {
  enUS: TextStyle;
  urPK: TextStyle;

  constructor(enUS?: TextStyle, urPK?: TextStyle) {
    this.enUS = enUS || { fontSize: 12, lineHeight: 14 };
    const fontSize = this.enUS.fontSize || 12;
    const lineHeight = this.enUS.lineHeight || fontSize * 1.5;
    this.enUS = {
      ...this.enUS,
      fontSize,
      lineHeight,
    };

    if (urPK) {
      this.urPK = urPK;
    } else {
      this.urPK = {
        ...this.enUS,
        marginTop: 2,
        fontSize: fontSize * 1.1,
        lineHeight: lineHeight * 1.5,
        fontFamily: 'urdu',
      } as TextStyle;
    }
  }
}

export interface ILocalizedConfig {
  fontSize?: number;
  color?: string;
  style?: TextStyle;
  maxLines?: number;
}

export class LocalizedConfig {
  fontSize: number;
  color: string;
  style: TextStyle;
  maxLines: number;

  constructor({ fontSize, color, style, maxLines }: ILocalizedConfig) {
    this.fontSize = fontSize || 12;
    this.color = color || useThemeStore.getState()?.palette?.textColor;
    this.style = style || {};
    this.maxLines = maxLines || 1;
  }

  getStyle = (): LocalizedStyle => {
    const _style: TextStyle = this.style || {
      color: this.color,
      fontSize: this.fontSize,
    };
    return new LocalizedStyle(_style);
  };
}

export const englishUrduRequired = (input: Localized): Localized => {
  const enus = `*${input.enUS}`;
  return new Localized(enus, input.urPK);
};
