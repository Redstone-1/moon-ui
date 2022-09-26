import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalContainerConfigProps as MCCP } from '../../typings';
import { MIProps, MCProps, stateProps, nodeProps } from './interface';
import './index.css';

const modalControl: MCProps = {
  addChild: () => {},
  removeChild: () => {},
};

function ModalItem(props: MIProps) {
  const [show, setShow] = useState(props.show);
  useEffect(() => {
    if (props.show === false) setShow(false);
  }, [props.show]);
  return (
    <div
      className={`flexCenter modal-item ${show ? '' : 'modal-item-hidden'}`}
      style={{ '--duration--': `${props.config.duration}ms` } as any}
    >
      {props.children}
    </div>
  );
}

class ModalContainer extends React.Component {
  state: stateProps;
  constructor(props: any) {
    super(props);
    this.state = {
      nodeList: [],
      activeIDList: [],
    };
    const addChild = async (item: any, config: MCCP) => {
      const newNodeList = [...this.state.nodeList];
      const id = new Date().getTime();
      const newNode: nodeProps = {
        id,
        node: item,
        config,
        _delayTimer: -1,
        _durationTimer: -1,
      };
      newNodeList.push(newNode);
      let newActiveIDList = [...this.state.activeIDList, id];

      if (config.delay > 0) {
        newNode._delayTimer = setTimeout(() => {
          this.setState(
            {
              activeIDList: [id],
              nodeList: [newNode],
            },
            () => {
              newNode._durationTimer = setTimeout(() => {
                removeChild(newNode);
              }, config.duration);
            },
          );
        }, config.delay);
      } else {
        this.setState(
          {
            activeIDList: newActiveIDList,
            nodeList: newNodeList,
          },
          () => {
            newNode._durationTimer = setTimeout(() => {
              removeChild(newNode);
            }, config.duration);
          },
        );
      }
    };
    const removeChild = async (newNode: nodeProps) => {
      clearTimeout(newNode._delayTimer);
      clearTimeout(newNode._durationTimer);
      const newActiveIDList = this.state.activeIDList.filter(
        (activeId: string | number) => activeId !== newNode.id,
      );
      const newNodeList = this.state.nodeList.filter((item) => newActiveIDList.includes(item.id));
      this.setState({
        activeIDList: newActiveIDList,
        nodeList: newNodeList,
      });
    };
    modalControl.addChild = addChild;
    modalControl.removeChild = removeChild;
  }
  render() {
    return (
      <div className="modal-container">
        {this.state.nodeList.map((item) => (
          <ModalItem
            key={item.id}
            show={this.state.activeIDList.indexOf(item.id) !== -1}
            config={item.config}
          >
            {item.node}
          </ModalItem>
        ))}
      </div>
    );
  }
}

(function initModalContainer() {
  let ele = document.getElementById('source-modal-contain');
  if (!ele) {
    // 如果不存在容器，则进行创建
    let sourceModalContainer = document.createElement('div');
    sourceModalContainer.id = 'source-modal-contain';
    document.body.append(sourceModalContainer);
    ele = document.getElementById('source-modal-contain');
    // 通过ReactDOM将容器挂载在真实dom上
    ReactDOM.render(<ModalContainer />, ele);
  }
})();

export { modalControl };
