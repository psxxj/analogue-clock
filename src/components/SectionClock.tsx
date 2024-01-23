import React from 'react';
import styled from 'styled-components';
import LineClockHand from './LineClockHand';
import { handMethodList } from '../constant/handMethodList';
import TooltipClockTime from './TooltipClockTime';

const SectionClock: React.FC = () => {
  return (
    <StyledSection>
      <div className="center-dot" />
      {handMethodList.map((method) =>
        <LineClockHand key={method.name} handMethod={method} />
      )}
      <TooltipClockTime />
    </StyledSection>
  )
}

export default SectionClock;

const StyledSection = styled.section`
  position: relative;
  margin: 0 5%;
  width: 90%;
  padding-bottom: 90%;
  border-radius: 50%;
  border: 3px solid brown;
  background-color: transparent;
  
  > * {
    position: absolute;
  }
  
  > .center-dot {
    width: 10px;
    height: 10px;
    background-color: brown;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;