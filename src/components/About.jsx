import React from 'react';
import Who from "./Who";
import myPic from "../assets/images/mypic.jpeg";
import {Container, ImgDiv} from "./styles/StyledAbout.styled";

export default function About() {
    return (
        <Container id="about">
            <Who />
            <ImgDiv><img src={myPic} /></ImgDiv>
        </Container>
    )
}
