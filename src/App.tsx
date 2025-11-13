import { Container } from './App.styles';
import { HeaderNav } from './components/ui';
import { Home } from './components/pages';

export const App = () => {
  return (
    <Container>
      <HeaderNav />

      <Home />
    </Container>
  );
};
