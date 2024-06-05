import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveSquare = keyframes`
  to {
    transform: translate(100vw, -50vh);
  }
`;

const moveCircle = keyframes`
  to {
    transform: translate(100vw, -100vh);
  }
`;

const moveRectangle = keyframes`
  to {
    transform: translate(100vw, -50vh);
  }
`;

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: crimson;
  border-radius: 50%;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: ${moveSquare} 25s linear alternate infinite;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: darkblue;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: ${moveCircle} 25s linear alternate infinite;
`;

const Rectangle = styled.div`
  width: 50px;
  height: 25px;
  background-color: green;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50%;
  z-index: -1;
  animation: ${moveRectangle} 25s linear alternate infinite;
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rectangle />
    </>
  );
};

export default AnimatedShapes;
