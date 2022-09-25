import { ModalContainerConfigProps as MCCP } from '../../typings';

export interface nodeProps {
  node: any;
  config: MCCP;
  id: number | string;
  _delayTimer: number;
  _durationTimer: number;
}

export interface stateProps {
  nodeList: any[];
  activeIDList: any[];
}

export interface MIProps {
  key: number;
  show: boolean;
  config: MCCP;
  children: React.ReactNode;
}

export interface MCProps {
  addChild: (item: any, config: MCCP) => void;
  removeChild: (item: any, config: MCCP) => void;
}
