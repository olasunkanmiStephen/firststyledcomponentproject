import Intro from './Component/Intro'
import Navbar from './Component/Navbar'
import styled from 'styled-components'
import '../src/style.css'  // Assuming this is your global styles
import Features from './Component/Features'
import Service from './Component/Service'
import Pricing from './Component/Pricing'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

// Styled components for the App component and IntroShape
const Container = styled.div`
  height: 100vh;
  // overflow: hidden;
  position: relative;
`

const IntroShape = styled.div`
  clip-path: polygon(100% 0%, 70% 0%, 57% 100%, 100% 100%);
  background-color: crimson;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1; /* Ensure IntroShape is behind other content */
`

const FeaturesShapes = styled.div`
  clip-path: polygon(57% 0%, 0% 0%, 0% 100%, 40% 100%);
  background-color: crimson;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0.4;
  z-index: -1; /* Ensure IntroShape is behind other content */
`

const ServiceShapes = styled.div`
  clip-path: polygon(0 0, 0 100%, 40% 100%, 40% 0);
  background-color: crimson;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0.4;
  z-index: -1; 
`

const PriceShapes = styled.div`
  clip-path: polygon(40% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0.4;
  z-index: -1; 
`

const App = () => {

  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar/>
        <Intro/>
        <IntroShape/>
      </Container>
      <Container>
        <Features/>
        <FeaturesShapes/>
      </Container>
      <Container>
          <Service/>
          {!smallScreen && <ServiceShapes/>}
      </Container>
      <Container>
          <Pricing/>
          <PriceShapes/>
      </Container>
      <Container>
          <Contact/>
          <Footer/>
      </Container>
    </>
  )
}

export default App
