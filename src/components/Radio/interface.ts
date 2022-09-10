import { CSSProperties, ReactNode } from 'react';
import { ButtonProps } from '../Button/interface';

export type StringNumber = string | number;
export interface OptionObject {
  label: ReactNode;
  value: StringNumber;
  disabled?: boolean;
}

export interface RadioProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 类名 */
  className?: string;
  /** 单选框文本内容 */
  children?: ReactNode;
  /** 是否选中 */
  checked: boolean;
  /** 禁用 */
  disabled?: boolean;
  /** 单选框 value 属性 */
  value?: string | number | readonly string[] | undefined;
  /** 点击回调 */
  onChange: (checked: boolean, e: Event) => void;
}

export interface RadioGroupProps {
  /** Group  内联样式 */
  style?: CSSProperties;
  /** Group  类名 */
  className?: string | string[];
  /** Group  按钮类型 */
  type: 'button';
  /** Group  按钮大小 */
  buttonSize: 'small' | 'medium' | 'large';
  /** Group  按钮颜色，接受16进制颜色 */
  buttonBgColor: string;
  /** Group  按钮 active 颜色，接受16进制颜色 */
  buttonActiveColor: string;
  /** Group  是否禁用 */
  disabled?: boolean;
  /** Group  横纵布局 */
  direction?: 'horizontal' | 'vertical';
  /** Group  选项配置 */
  options: { label: ReactNode; value: string | number; disabled?: boolean }[];
  /** Group  选中的值 */
  value: string | number;
  /** Group  点击回调 */
  onChange: (value: string | number, e: Event) => void;
}
