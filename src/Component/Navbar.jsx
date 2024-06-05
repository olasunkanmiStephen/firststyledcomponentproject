import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  justify-content: space-between;
  width: 100%; 
  border-bottom: 1px ridge black;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.h1`
    text-decoration: underline crimson;
    font-weight: bold;
`
const Menu = styled.ul`
    font-weight: bold;
    display: flex;
    align-items: center;
    list-style: none;
    gap: 30px
`
const MenuItem = styled.li`
    font-weight: bold;
`
const Button = styled.button`
    border: 1px solid white;
    background-color: crimson;
    padding: 10px 15px;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Right>
          <Button>Join Now</Button>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
