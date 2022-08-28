import { CSSProperties, ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  type?: 'default' | 'primary' | 'secondary' | 'dashed' | 'text' | 'outline';
  size?: 'mini' | 'small' | 'default' | 'large';
  shape?: 'circle' | 'round' | 'square';
  status?: 'warning' | 'danger' | 'success' | 'default';
  disabled?: boolean;
  loading?: boolean;
  loadingFixedWidth?: boolean;
  icon?: ReactNode;
  htmlType?: ButtonHTMLAttributes<any>;
  onClick?: (e: Event) => void;
}
