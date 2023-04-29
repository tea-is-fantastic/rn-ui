import React from 'react';
import SelectDialogWrapper from './SelectDialogWrapper';
import type { ReactFC } from '@tisf/rn-providers';
import type { ICustomSelectInput } from './utils';
import { getTextComp } from '../inputs/utils';

const SelectDialogRendered: ReactFC<ICustomSelectInput> = (props) => {
  const { items, onChange, value, placeholder, forwardedRef, renderChildren } =
    props;
  const text = getTextComp(placeholder);

  return (
    <SelectDialogWrapper
      forwardedRef={forwardedRef}
      onChange={onChange}
      items={items}
    >
      {renderChildren && renderChildren(value || text || '')}
    </SelectDialogWrapper>
  );
};
export default SelectDialogRendered;
