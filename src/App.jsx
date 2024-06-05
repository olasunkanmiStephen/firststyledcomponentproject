import Intro from './Component/Intro'
import Navbar from './Component/Navbar'
import styled from 'styled-components'
import '../src/style.css'  // Assuming this is your global styles
import Features from './Component/Features'

// Styled components for the App component and IntroShape
const Container = styled.div`
  height: 100vh;
  // overflow: hidden;
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

const App = () => {
  return (
    <>
      <Container>
        <Navbar/>
        <Intro/>
        <IntroShape/>
      </Container>
      <Container>
        <Features/>
      </Container>
    </>
  )
}

export default App
