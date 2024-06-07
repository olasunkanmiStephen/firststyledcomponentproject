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
    posotion: relative;
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
    top 0;
    width: 40%;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
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

const Service = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Left>
                <Image open={open} src={How} />
                <Video open={open} autoPlay loop controls src="https://youtu.be/aP2up9N6H-g?si=_HB0Edl1akPEi5k_"/>
            </Left>
            <Right>
                <Wrapper>
                    <Title>
                        Simple process to start
                    </Title>
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
        </Container>
    );
};

export default Service;
