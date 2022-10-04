import React, { FC, ReactElement } from 'react';
import { IconProps } from './interface';
import { copyToClipboard } from '../../utils';
import './index.less';

/**
 * 图标组件，图标库是 @ant-design/icons，这里 props 用不到，结构出来是为了文档显示 API
 * @param param
 * @returns ReactElement
 */
const Icon: FC<IconProps> & { IconBox: any } = ({
  style,
  className,
  spin,
  rotate,
  twoToneColor,
}): ReactElement => {
  return <div></div>;
};

const IconBox: FC<any> = ({ icon }) => {
  const iconName = icon?.type?.render?.displayName || '';
  return (
    <div className="icon-box" onClick={() => copyToClipboard(iconName)}>
      <p className="icon">{icon && icon}</p>
      <p className="icon-text">{icon && iconName}</p>
    </div>
  );
};

Icon.IconBox = IconBox;
export default Icon;
