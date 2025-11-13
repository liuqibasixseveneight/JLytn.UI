import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme?.colors?.zinc?.darkest};
  height: 100%;
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
