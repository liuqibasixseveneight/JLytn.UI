import styled from 'styled-components';

export const LogoWrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => `${theme?.colors?.zinc?.black}`};
  color: ${({ theme }) => theme?.colors?.zinc?.lightest};
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-transform: uppercase;

  & .logo-role {
    color: ${({ theme }) => theme?.colors?.zinc?.base};
  }
`;
