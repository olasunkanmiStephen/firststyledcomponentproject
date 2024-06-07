import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0;
`;

const ListItem = styled.li`
    margin: 10px 0;
    font-size: 16px;
`;

const Price = styled.span`
    font-size: 36px;
    font-weight: bold;
    color: #333;
`;

const Type = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    background-color: #f8f8f8;
    color: #333;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: darkblue;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #00008b;
    }
`;

const PriceCard = ({price, type}) => {
  return (
    <Container>
        <PriceContainer>
            <span>$<Price>{price}</Price>/month</span>
            <Type>{type} Plan</Type>
        </PriceContainer>
        <List>
            <ListItem>200 Hand-Crafted Templates</ListItem>
            <ListItem>Exclusive Support</ListItem>
            <ListItem>50+ PreBuilt Websites</ListItem>
            <ListItem>Premium Plugins</ListItem>
        </List>
        <Button>Join Now</Button>
    </Container>
  );
}

export default PriceCard;
