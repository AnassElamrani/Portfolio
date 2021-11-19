import Welcome from "./styles/Welcome.styled";
import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";
import React, {useEffect} from "react"
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

@media only screen and (max-width: 600px)
{
    ${'' /* font-size: 4vw; */}
}
&:hover  {
    ${'' /* color:red; */}
}
`
const HelloTitle = styled.h2`
color: #9e9e9e;
font-family: 'Abel', sans-serif;
font-size: 13px;
letter-spacing: 2px;

@media only screen and (max-width: 600px)
{
    ${'' /* font-size: 4vw; */}
}
`

const ContactMe = styled.div`
border: 1px solid white;
border-radius : 5px;
width: 40px;
height: 15px;
collor: white;
`

export default function StyledWelcome() {

    useEffect(() => {
        console.log('x')
    })

    return (
    <Welcome className="welcome">
    <Navbar />
        <Test><Particles className="particles" height='100vh' style={{height: '80vh'}} params={particlesConfig} /></Test>
            <Typist avgTypingDelay={60}>
        <Title>
            <HelloTitle>HELLO THERE&#128075;, I'M</HelloTitle>
            <h1>Anass Elamrani</h1>
            <h1 style={{color : '#09f755'}}><span style={{color:'#9e9e9e'}}>&lt;</span> I am a Full Stack Developer <span style={{color:'#9e9e9e'}}>/&gt; </span></h1>
          {/* <Typist.Backspace count={20} delay={800} /> */}
        {/* <ContactMe>CONTACT ME</ContactMe> */}
        </Title>
        </Typist>
        <ScrollDownIndicator />
    </Welcome>        
    )
}
