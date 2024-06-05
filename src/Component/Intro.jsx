import React from 'react'
import styled from 'styled-components'
import ht from '../assets/ht.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    height: calc(100vh - 50px);
    display:flex;
    padding: 20px;
`

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;  /* Corrected property name */
    justify-content: center;
`

const Title = styled.h1`
    width: 60%;
    font-size: 60px; 
`

const Desc = styled.p`
    width: 60%;
    font-size: 20px; 
    margin-top: 20px;
`

const Info = styled.p`
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
    padding: 15px;
    background-color: darkblue;  /* Corrected property name */
    color: white;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
`

const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`

const Right = styled.div`
    width: 40%;
    display:flex;
    align-item: center;
    justify-content: center;
    he

    `


const Imageht = styled.img`
    width:100%;
`


const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adventures in creative age</Title>
            <Desc>We believe that designing products and services in close partnership with our clients is the only way to have a real impact in their business.</Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call Us (+234) 80 5636 6057</Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
            </Info>
        </Left>
        <Right>
            {/* Changed to use Imageht component */}
            <Imageht src={ht} alt="HT Logo"/>
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Intro
