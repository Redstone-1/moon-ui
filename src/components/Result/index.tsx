import React, { FC, ReactElement } from 'react';
import {
  InfoCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  WarningFilled,
  RobotFilled,
  AlertFilled,
  FrownFilled,
} from '@ant-design/icons';
import classNames from 'classnames';
import { ResultProps } from './interface';
import './index.less';

const Result: FC<ResultProps> = ({
  style,
  className,
  icon,
  title = `This is result page's title`,
  subTitle,
  status = 'info',
  extra,
}): ReactElement => {
  const classes = classNames('moon-ui-result', {}, className);

  const iconMap = {
    info: () => <InfoCircleFilled />,
    success: () => <CheckCircleFilled />,
    error: () => <CloseCircleFilled />,
    warning: () => <WarningFilled />,
    status403: () => <AlertFilled />,
    status404: () => <RobotFilled />,
    status500: () => <FrownFilled />,
  };

  return (
    <div style={style} className={classes}>
      <span className={`result-icon ${status}`}>{icon ? icon : iconMap[status]()}</span>
      <p className="result-title">{title}</p>
      {subTitle && <p className="result-subtitle">{subTitle}</p>}
      {extra && <div className="result-extra">{extra}</div>}
    </div>
  );
};

export default Result;
