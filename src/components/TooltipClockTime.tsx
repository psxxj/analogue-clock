import React, { useRef } from 'react';
import styled from 'styled-components';
import { useTime } from '../hook/useTime';
import useMousePosition from '../hook/useMousePosition';

const TooltipClockTime: React.FC = () => {
  const time = useTime();
  const wrapperRef = useRef(null);
  const {mousePosition, handleMouseMove, handleMouseLeave} = useMousePosition(wrapperRef);
  const {x, y, isVisible} = mousePosition;
  const isShow = isVisible && !(x === 0 || y === 0);

  return (
    <StyledWrapper onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={wrapperRef}>
      <StyledTooltip $visible={isShow} style={{left: x, top: y}}>
        {time.toLocaleTimeString()}
      </StyledTooltip>
    </StyledWrapper>
  );
}

export default TooltipClockTime;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: transparent;
  z-index: 100;
`;

const StyledTooltip = styled.div<{$visible: boolean}>`
  position: absolute;
  display: ${({ $visible }) => $visible ? 'flex' : 'none'};
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  transform: translate(5px, calc(-100% - 5px));
  width: 110px;
  justify-content: center;
  align-items: center;
`;