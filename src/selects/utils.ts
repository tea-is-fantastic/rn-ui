import type { ICustomTextInput } from '../inputs/types';
import type { ReactNode } from 'react';
import type { IModalMenuItem } from '../ui/ModalMenu';

export interface ICustomSelectInput extends ICustomTextInput {
  items: IModalMenuItem[];
  renderChildren?: (text: string) => ReactNode;
}

export const selectifyOptions = (options: string[]): IModalMenuItem[] => {
  return options.map((name) => ({ value: name, label: name }));
};
