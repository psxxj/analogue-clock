import React, { useState } from 'react';
import { IFMousePosition } from '../interface/IFMousePosition';

const initialMousePosition: IFMousePosition = {
  x: 0,
  y: 0,
  isVisible: false
}

const useMousePosition = (ref: React.MutableRefObject<any>) => {
  const [mousePosition, setMousePosition] = useState<IFMousePosition>(initialMousePosition);

  const handleMouseMove = (e: any) => {
    const wrapperRect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - wrapperRect.left,
      y: e.clientY - wrapperRect.top,
      isVisible: true
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({...mousePosition, isVisible: false});
  };

  return {mousePosition, handleMouseMove, handleMouseLeave};
};

export default useMousePosition;
