import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? '#cccccc' : props.backgroundColor || '#007bff')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#cccccc' : darkenColor(props.backgroundColor || '#007bff', 0.1))};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

// 辅助函数：将颜色变暗
const darkenColor = (color: string, amount: number) => {
  const num = parseInt(color.replace('#', ''), 16);
  const r = Math.max(0, (num >> 16) - amount * 255);
  const g = Math.max(0, ((num >> 8) & 0x00ff) - amount * 255);
  const b = Math.max(0, (num & 0x0000ff) - amount * 255);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

export const Button: React.FC<ButtonProps> = ({ text, backgroundColor, disabled = false, onClick }) => {
  return (
    <StyledButton disabled={disabled} backgroundColor={backgroundColor} onClick={onClick}>
      {text || 'Click Me'}
    </StyledButton>
  );
};