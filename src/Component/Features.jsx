import React from 'react'
import styled from 'styled-components'
import App from '../assets/introhand.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display: flex;
    justify-content: center;
    position: relative
    height: 100%;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
        padding: 30px 20px;
    }
    `

const Left = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    @media only screen and (max-width: 480px) {
        width: 90%;
        margin-left: -10px;
      }
`

const Image = styled.img`
    // height: 100%;
    width: 70%;
`


const Title = styled.span`
    font-size: 70px;

    @media only screen and (max-width: 480px) {
        font-size: 50px;
      }
`
const SubTItle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`
const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px; 
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
const Features = () => {
  return (
    <Container>
        <Left>
            <Image src={App} />
        </Left>
        <Right>
            <Title>
            <b>good</b> design<br/>
            <b>good</b>business
            </Title>
            <SubTItle>
                We know that good design means good business
            </SubTItle>
            <Desc>
                We help our clients succeed by creating brand identities, dig experiences, and print materials that communicate clearly, achieve marketing goal, and look fantastic.
            </Desc>
            <Desc>
                We care your business and gurantee you to achieve marketing goals
            </Desc>
            <Button>
                Learn More
            </Button>
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Features