import React from 'react'
import styled from 'styled-components'
import How from '../assets/introhand.png'
import MiniCard from './MiniCard'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    height: 100%;
    width: 75%
    margin-left: 100px;
`

const Right = styled.div`
    width: 50%;
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

const Desc = styled.p`
    // font-size: 20px;
`

const Service = () => {
  return (
    <Container>
        <Left>
            <Image src={How}/>
        </Left>
        <Right>
            <Wrapper>
                <Title>
                    Simple process to start
                </Title>
                <Desc>
                    We provide digital experience services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirements. We work with you, Not for you. Although we have a great resources 
                </Desc>
                <CardContainer>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>
                </CardContainer>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default Service