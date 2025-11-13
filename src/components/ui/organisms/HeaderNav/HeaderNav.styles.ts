import styled from 'styled-components';

export const HeaderNavWrapper = styled.header`
  height: 100px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const HeaderNavContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 4rem;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 0.5rem 2rem;
  }
`;
