import React from 'react'
import styled from 'styled-components'
import App from '../assets/introhand.png'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    display: flex;
    width: 50%;
`

const Right = styled.div`
    display: flex;
    width: 50%
`

const Image = styled.img`

`

const Features = () => {
  return (
    <Container>
        <Left>
            <Image src={App} />
        </Left>
        <Right></Right>
    </Container>
  )
}

export default Features