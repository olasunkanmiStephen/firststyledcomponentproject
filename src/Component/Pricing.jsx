import React from 'react'
import PriceCard from './PriceCard'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`

const Pricing = () => {
  return (
    <Container>
        <PriceCard price="10" type="Basic"/>
        <PriceCard price="20" type="Premium"/>
        <PriceCard price="30" type="Advanced"/>
    </Container>
  )
}

export default Pricing