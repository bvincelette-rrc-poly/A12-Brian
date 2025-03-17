import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  font-size: 16px;
  color: ${(props) => (props.disabled ? '#cccccc' : props.color || '#000000')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  transition: color 0.3s;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Label: React.FC<LabelProps> = ({ text, color, disabled = false }) => {
  return (
    <StyledLabel color={color} disabled={disabled}>
      {text || 'Default Label'}
    </StyledLabel>
  );
};