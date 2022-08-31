import { CSSProperties, ReactNode } from 'react';

export interface ButtonProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  type?: 'primary' | 'secondary' | 'dashed' | 'outline';
  size?: 'small' | 'medium' | 'large';
  shape?: 'circle' | 'round' | 'square';
  status?: 'warning' | 'danger' | 'success';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (e: Event) => void;
}

export interface ButtonGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
}
