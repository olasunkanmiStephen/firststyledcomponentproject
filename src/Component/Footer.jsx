import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  color: lightgray;
  background-color: #111;
  justify-content: center;
  padding: 20px 0;position: 
  margin: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 0 20px;
  @media only screen and (max-width: 480px) {
    font-size: 10px;
    padding: 0 7px;
  }
`;

const Copyright = styled.span`
  margin-left: auto;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>&copy; Tife Dev</Copyright>
      </Wrapper>
    </Container>
  );
}

export default Footer;
