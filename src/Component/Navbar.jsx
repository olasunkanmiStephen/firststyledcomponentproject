import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: white;
  height: 60px;
  justify-content: center;
  width: 100%; 
  box-shadow: 0 0 4px black;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  max-width: 1200px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.h1`
  text-decoration: underline crimson;
  font-weight: bold;
  margin-right: 50px;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  font-weight: bold;
`;

const Button = styled.button`
  border: 1px solid white;
  background-color: crimson;
  padding: 10px 15px;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

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
