import React from 'react';
import Who from "./Who";
import myPic from "../assets/images/mypic.jpeg";
import {Container, ImgDiv, WhoTitle} from "./styles/StyledAbout.styled";

export default function About() {
    return (
        <>
            <WhoTitle>ABOUT ME</WhoTitle>
        <Container id="about">
            <Who />
            <ImgDiv><img src={myPic} /></ImgDiv>
        </Container>
        </>
    )
}
