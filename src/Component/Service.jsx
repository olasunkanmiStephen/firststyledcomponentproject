import React, { useState } from 'react';
import styled from 'styled-components';
import How from '../assets/introhand.png';
import MiniCard from './MiniCard';
import Play from '../assets/play.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const Desc = styled.p`
  color: #777;
  font-size: 16px;
  margin-top: 20px;
  line-height: 1.5;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => (props.open ? 'none' : 'block')};
  height: 100%;
  width: 70%;
  padding: 10px 0;
`;

const Video = styled.video`
  display: ${(props) => (!props.open ? 'none' : 'block')};
  height: 300px;
  position: absolute;
  top: 0;
  width: 40%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    padding: 20px;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  border-radius: 5px;
  border: none;
  padding: 5px;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480;

  return (
    <Container>
      <Left>
        <Image open={open} src={How} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital experience services to startups and small businesses looking for a partner for their digital media, design & development, lead generation, and communications requirements. We work with you, not for you. Although we have great resources, we aim to be an extension of your team.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(!open)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
