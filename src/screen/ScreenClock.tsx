import React from 'react';
import styled from 'styled-components';
import HeaderClock from '../components/HeaderClock';
import SectionClock from '../components/SectionClock';

const ScreenClock: React.FC = () => {
  return (
    <StyledMain>
      <HeaderClock />
      <SectionClock />
    </StyledMain>
  )
}

export default ScreenClock;

const StyledMain = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px;
  border-radius: 16px;
  width: 50vw;
  height: fit-content;
  background-color: white;
  
  @media screen and (max-width: 768px) {
    width: 100vw;
    border-radius: 0;
  }
`;