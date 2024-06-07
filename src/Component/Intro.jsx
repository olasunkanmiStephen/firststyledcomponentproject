import React from 'react';
import styled from 'styled-components';
import introhand from '../assets/introhand.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    
    @media only screen and (max-width: 480px) {
        width: 90%;
        // padding: 0 20px
    }
`;

const Title = styled.h1`
    width: 60%;
    font-size: 60px;
    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size: 50px; 
    }
`;

const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 480px){
        flex-direction: column;
        width: 100%;
      }
`;

const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px; /* Added margin to separate from button on smaller screens */
`;

const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
`;

const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;

const Right = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
        display: none;
      }
`;

const Imageht = styled.img`
    width: 100%;
    height: fit-content;
`;

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
            <Imageht src={introhand} alt="HT Logo" />
        </Right>
        <AnimatedShapes />
    </Container>
  );
}

export default Intro;
