import React from 'react';
import SelectModalWrapper from './SelectModalWrapper';
import type { ICustomSelectInput } from './utils';
import { getTextComp } from '../inputs/utils';
import type { ReactFC } from '@tisf/rn-providers';

const SelectModalRendered: ReactFC<ICustomSelectInput> = (props) => {
  const { items, onChange, value, placeholder, forwardedRef, renderChildren } =
    props;
  const text = getTextComp(placeholder);

  return (
    <SelectModalWrapper
      forwardedRef={forwardedRef}
      onChange={onChange}
      items={items}
    >
      {renderChildren && renderChildren(value || text || '')}
    </SelectModalWrapper>
  );
};
export default SelectModalRendered;
