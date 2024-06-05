import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveSquare = keyframes`
  to {
    transform: translate(100vw, 100vh);
  }
`;

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: crimson;
  border-radius: 100%;
  opacity: 0.7;
  position: absolute;
  top: -60%;
  left: -60%;
  animation: ${moveSquare} 25s linear alternate infinite;
`;

const Squared = styled(Square)`
width: 60px;
height: 60px;
border-radius: 100%;
background-color: darkblue;
opacity: 0.7;
position: absolute;
top: -50%;
left: -51%;
z-index: -1;
animation: ${moveSquare} 25s linear alternate infinite;
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Squared />
    </>
  );
};

export default AnimatedShapes;
