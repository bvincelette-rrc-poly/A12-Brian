import React from 'react';
import styled from 'styled-components';

interface TextProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledText = styled.p<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Text: React.FC<TextProps> = ({ children, disabled }) => {
  return <StyledText disabled={disabled}>{children}</StyledText>;
};

export default Text;