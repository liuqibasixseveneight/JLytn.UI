import { forwardRef } from 'react';

import { LogoWrapper } from './Logo.styles';
import type { LogoProps } from './types';

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ withoutRole = false, ...rest }, ref) => (
    <LogoWrapper ref={ref} {...rest}>
      <span>J-LYTN</span>
      {!withoutRole && <span className='logo-role'>// Frontend Developer</span>}
    </LogoWrapper>
  )
);

Logo.displayName = 'Logo';
