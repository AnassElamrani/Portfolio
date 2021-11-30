import Welcome from "./styles/Welcome.styled";
import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";
import React, {useEffect, useRef } from "react"
import styled from 'styled-components'
import Typist from "react-typist";
import ScrollDownIndicator from "./ScrollDownIndicator";
import Navbar from "./Navbar";

const Test = styled.div`
height: 88vh;
`

const Title = styled.div`
cursor: default;
color: white;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Abel', sans-serif;
font-weight: 100;
${'' /* font-family: 'Libre Baskerville', serif; */}

& > h1 {
    font-size: 30px;
    @media only screen and (max-width: 600px)
    {
        font-size: 26px;
    }
}
`
const HelloTitle = styled.h3`
color: #9e9e9e;
font-family: 'Abel', sans-serif;
font-size: 13px;
letter-spacing: 2px;

@media only screen and (max-width: 700px)
{
    font-size: 11px;
}
`
const DevText = styled.h3`
color : #09f755;
font-size: 24px;
@media only screen and (max-width: 700px)
{
    font-size: 14px;
}
`

export default function StyledWelcome() {

    useEffect(() => {
        // window.addEventListener('scroll', (e) => {
        // }, [scrollDownRef])
    })

    return (
        <Welcome className="welcome" style={{position:'relative'}}>
    <Navbar />
        <Test ><Particles className="particles" height='90vh' style={{height: '80vh'}} params={particlesConfig} /></Test>
            <Typist avgTypingDelay={60}>
        <Title>
            <HelloTitle>HELLO THERE&#128075;, I'M</HelloTitle>
            <h1>Anass Elamrani</h1>
            <DevText><span style={{color:'#9e9e9e'}}>&lt;</span> I am a Full Stack Developer <span style={{color:'#9e9e9e'}}>/&gt; </span></DevText>
        </Title>
        </Typist>
        <ScrollDownIndicator/>
    </Welcome>        
    )
}
