import React from 'react'
import styled from 'styled-components'
import Map from '../assets/map.png'
import Phone from '../assets/phone.png'
import Send from '../assets/send.png'

const Container = styled.div`
    height: 90%;
    background: url("https://www.toptal.com/designers/substlepatterns/patterns/double-bubble-outline.png")
`
const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display:flex;
    align-items: denter;
    justify-content: center;
`
const FormContainer = styled.div`
    width: 50%;
`
const Title = styled.h1`
    margin-top: 0;
    margin-left: 74px;
`

const AddressContainer = styled.div`
    width: 50%;
`

const Form = styled.form`
    height: 250px;
    display: flex;
    algn-items: center;
    justify-content: center;
`

const LeftForm = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    algn-items: center;
    justify-content: space-between;
    margin-right: 20px;
`

const RightForm = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    algn-items: center;
    justify-content: space-between;
`

const Input = styled.input`
    width: 200px;
    padding: 20px;
`

const TextArea = styled.textarea`
    width:200px;
    height: 115px;
    padding: 20px;
`
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
                <Title>Questions? <br/> Let's Get In Touch</Title>
                <Form>
                    <LeftForm>
                        <Input placeholder='Your Name'/>
                        <Input placeholder='Your Email'/>
                        <Input placeholder='Subject'/>
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder='Your Message'/>
                        <Button>Send</Button>
                    </RightForm>
                </Form>
            </FormContainer>
            <AddressContainer>

            </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact