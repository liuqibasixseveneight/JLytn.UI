import { forwardRef } from 'react';

import { HeaderNavMenuButtonWrapper } from './HeaderNavMenuButton.styles';
import type { HeaderNavMenuButtonProps } from './types';

export const HeaderNavMenuButton = forwardRef<
  HTMLButtonElement,
  HeaderNavMenuButtonProps
>(
  (
    {
      icon,
      children,
      'aria-label': ariaLabel = 'Open navigation menu',
      ...rest
    },
    ref
  ) => (
    <HeaderNavMenuButtonWrapper ref={ref} aria-label={ariaLabel} {...rest}>
      {icon ?? children ?? '='}
    </HeaderNavMenuButtonWrapper>
  )
);

HeaderNavMenuButton.displayName = 'HeaderNavMenuButton';


