import styled from 'styled-components';

export const IconButtonWrapper = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme?.colors?.zinc?.darkest};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0.75rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;


