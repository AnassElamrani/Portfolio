import Welcome from "./styles/Welcome.styled";
import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";
import React, {useEffect} from "react"
import styled from 'styled-components'
import Typist from "react-typist";
import ScrollDownIndicator from "./ScrollDownIndicator";


const Test = styled.div`
height: 88vh;
`

const Title = styled.div`
color: white;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Libre Baskerville', serif;
`
const HelloTitle = styled.h2`
color:#ff5722;
font-family: monospace

`

export default function StyledWelcome() {

    useEffect(() => {
        console.log('x')
    })

    return (
    <Welcome className="welcome">
        <Test><Particles className="particles" height='100vh' style={{height: '80vh'}} params={particlesConfig} /></Test>
            <Typist avgTypingDelay={60}>
        <Title>
            <HelloTitle>Hello there !</HelloTitle>
            <h1>I am Anass Elamrani</h1>
            <h1>I am a Full Stack Developer .</h1> 
          {/* <Typist.Backspace count={20} delay={800} /> */}
        </Title>
        </Typist>
        <ScrollDownIndicator />
    </Welcome>        
    )
}
