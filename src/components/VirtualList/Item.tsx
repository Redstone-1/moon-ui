import React, { useRef, useEffect } from 'react';
import { ItemProps } from './interface';

function Item({ index, data, setHeight }: ItemProps) {
  const itemRef = useRef<any>();
  useEffect(() => {
    setHeight(index, itemRef.current.getBoundingClientRect().height);
  }, [setHeight, index]);

  return <div ref={itemRef}>{data[index]}</div>;
}

export default Item;
