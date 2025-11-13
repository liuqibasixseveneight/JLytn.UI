import { forwardRef } from 'react';

import { IconButtonWrapper } from './IconButton.styles';
import type { IconButtonProps } from './types';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, type = 'button', ...rest }, ref) => (
    <IconButtonWrapper ref={ref} type={type} {...rest}>
      {children}
    </IconButtonWrapper>
  )
);

IconButton.displayName = 'IconButton';


