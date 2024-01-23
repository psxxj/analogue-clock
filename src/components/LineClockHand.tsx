import React from 'react';
import styled from 'styled-components';
import { IFHand } from '../interface/IFHand';
import { useTime } from '../hook/useTime';

interface Props  {
  handMethod: IFHand;
}

const LineClockHand: React.FC<Props> = ({handMethod}) => {
  const time = useTime();
  const {getAngle, ...hand} = handMethod;
  const rotation = getAngle(time);

  return (
    <StyledLine {...hand} $rotation={rotation} />
  )
}

export default LineClockHand;

const StyledLine = styled.div.attrs<{$rotation: number}>(({$rotation}) => ({
  style: {
    transform: `rotate(${$rotation}deg)`,
  },
}))<Omit<IFHand, 'getAngle'>>`
  width: ${props => props.$widthPixel}px;
  height: ${({ $heightRatio }) => $heightRatio * 100}%;
  background-color: ${props => props.$color};
  top: ${props => 50 - props.$heightRatio * 100}% !important;
  left: 50%;
  transform-origin: 50% 100%;
`;