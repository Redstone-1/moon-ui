import { CSSProperties, ReactNode } from 'react';

export type StringNumber = string | number;
export interface OptionObject {
  label: ReactNode;
  value: StringNumber;
  disabled?: boolean;
}

export interface CheckboxProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 类名 */
  className?: string;
  /** 复选框文本内容 */
  children?: ReactNode;
  /** 是否选中 */
  checked: boolean;
  /** 禁用 */
  disabled?: boolean;
  /** 半选 */
  halfChecked?: boolean;
  /** 复选框 value 属性 */
  value?: string | number | readonly string[] | undefined;
  /** 点击回调 */
  onChange: (checked: boolean, e: Event) => void;
}

export interface CheckboxGroupProps {
  /** Group 内联样式 */
  style?: CSSProperties;
  /** Group 类名 */
  className?: string | string[];
  /** Group 是否禁用 */
  disabled?: boolean;
  /** Group 复选框横纵布局 */
  direction?: 'horizontal' | 'vertical';
  /** Group 选项配置 */
  options: { label: ReactNode; value: string | number; disabled?: boolean }[];
  /** Group 选中的值 */
  values: string[] | number[];
  /** Group 点击回调 */
  onChange: (value: string | number, e: Event) => void;
}
