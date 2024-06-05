import React from 'react'
import styled from 'styled-components'

const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: #4e6bff;
    opacity: 0.7;
    position: absolute;
    top: -60%;
    left:-60%;
    z-index: -1
        animation: square 25s linear alternate infinite;

        @keyframes square {
            to[
                transform: translate(100vw, 100vh)
            ]
        }
`

const AnimatedShapes = () => {
  return (
    <Square/>
  )
}

export default AnimatedShapes