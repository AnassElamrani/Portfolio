import { useEffect } from 'react';
import {gsap} from "gsap"
import Who from "./Who";
import myPic from "../assets/images/mypic.jpeg";
import {Container, ImgDiv, WhoTitle} from "./styles/StyledAbout.styled";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
    // useEffect(() => {
        
    // })
    useEffect(() => {
       console.log('about')
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".about", 
            {
                scrollTrigger: {
                    trigger: '.about',
                    toggleActions: "restart none none none"
                },
            
            opacity: 0,
            x: -100,
            duration: 1
        });
        return (() => {
           console.log('aboutMe bybyby')
       })
    }, [])
    return (
        <div className="about">
            <WhoTitle>ABOUT ME</WhoTitle>
        <Container id="about">
            <Who />
            <ImgDiv><img src={myPic} /></ImgDiv>
        </Container>
        </div>
    )
}
