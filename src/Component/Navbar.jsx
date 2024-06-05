import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
  padding: 0;
  justify-content: space-between;
  width: 100%; 
  border-bottom: 1px ridge black;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Left = styled.div`
  width: 60%;
  padding: 10px 20px;  
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
          <p>button</p>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
