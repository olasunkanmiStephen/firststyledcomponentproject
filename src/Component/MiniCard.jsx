import React from 'react'
import styled from 'styled-components'
import Search from '../assets/search.png'


const Container = styled.p`
    width: 100px;
    padding: 20px;
    display:flex;
    flex-direction: column;
`

const Image = styled.img`
    width: 20px;
`

const Text = styled.span`

`

const MiniCard = () => {
  return (
    <Container>
        <Image src={Search}/>
        <Text>
            Lorem ipsum dolor sit amet consectetur.
        </Text>
    </Container>
  )
}

export default MiniCard