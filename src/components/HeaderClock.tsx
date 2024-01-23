import React from 'react';
import styled from 'styled-components';

const HeaderClock: React.FC = () => {
  return (
    <StyledHeader>
      <h1>Analog Clock</h1>
      <h5>by Sungjun Park, 2024</h5>
    </StyledHeader>
  )
}

export default HeaderClock;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  
  > h1 {
    font-size: 28px;
    text-align: center;
  }
`;