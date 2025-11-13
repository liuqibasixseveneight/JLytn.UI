import { Logo } from '../../atoms';
import { HeaderNavMenuButton } from '../../molecules';
import { HeaderNavContent, HeaderNavWrapper } from './HeaderNav.styles';

export const HeaderNav = () => {
  return (
    <HeaderNavWrapper>
      <HeaderNavContent>
        {/* LOGO */}
        <Logo />

        {/* MENU */}
        <HeaderNavMenuButton />
      </HeaderNavContent>
    </HeaderNavWrapper>
  );
};
