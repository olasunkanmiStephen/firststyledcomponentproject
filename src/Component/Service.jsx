import React from 'react'
import styled from 'styled-components'
import How from '../assets/introhand.png'
import MiniCard from './MiniCard'
import Play from '../assets/play.png'

const Container = styled.div`
    display: flex;
    align-item: center;
    height: 100%;
    justify-content: center;
`

const Desc = styled.p`
    
`

const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    height: 100%;
    width: 70%;
    padding: 10px 0
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
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

const Button = styled.button`
    // width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
`

const Icon =styled.img`
    width: 20px;
    margin-right: 10px;
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
                <Button><Icon src={Play}/>How it works</Button>
            </Wrapper>
        </Right>
    </Container>
  )
}

export default Service