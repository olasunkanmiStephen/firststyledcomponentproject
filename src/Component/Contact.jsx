import React from 'react';
import styled from 'styled-components';
import Map from '../assets/map.png';
import Phone from '../assets/phone.png';
import Send from '../assets/send.png';

const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  margin-left: 74px;

  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;

const Text = styled.span`
  font-size: 20px;
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    height: auto;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;


  @media only screen and (max-width: 480px) {
    padding: 10px;
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 115px;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    padding: 10px;
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 20px 20px;
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

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>Questions? <br /> Let's Get In Touch</Title>
          <Form>
            <LeftForm>
              <Input placeholder='Your Name' />
              <Input placeholder='Your Email' />
              <Input placeholder='Subject' />
            </LeftForm>
            <RightForm>
              <TextArea placeholder='Your Message' />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+1 631 1234 5678</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@lama.dev</Text>
            <Text>sales@tife.dev</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
