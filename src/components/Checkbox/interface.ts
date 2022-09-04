import { CSSProperties, ReactNode } from 'react';

export interface CheckboxProps {
  /** 内联样式 */
  style?: CSSProperties;
  /** 类名 */
  className?: string;
  /** 复选框文本内容 */
  children?: ReactNode;
  /** 是否选中 */
  checked?: boolean;
  /** 禁用 */
  disabled?: boolean;
  /** 半选 */
  halfChecked?: boolean;
  /** 复选框 value 属性 */
  value?: string | number | readonly string[] | undefined;
  /** 点击回调 */
  onChange?: (checked: boolean, e: Event) => void;
}
