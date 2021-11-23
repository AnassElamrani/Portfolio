import React, {useState, useRef} from "react";
import { StyledWho, WhoTitle, Paragraph, StyledDockMenu, Element, Line, Container, ActiveElement } from "./styles/StyledWho.styled"
import "./styles/custom.css"
const dock = ["projects", "skills", "contact"];

export const DockMenu = () => {

    const [magEl, setMagEl] = useState();
    const ElRef = useRef();

    const magnify = (e) => {
        console.log(e.target.id)
        // console.log(ElRef.current)
        setMagEl(e.target.id);
        // if(e.target == ElRef.current)
        // {
        //     setMagEl
        // }
    }

    return (
        <StyledDockMenu>
        {
            dock.map((el, index) => {
                return (
                    <Element
                        className={
                            (index == magEl) ? 'active': ''
                        }
                        key={index}
                        id={index}
                        onMouseEnter={(e) => {magnify(e)}}
                        onMouseLeave={() => {setMagEl(null)}}
                        mag={magEl}>
                        <p>0{index+1}</p>
                        <Line />
                        <p>{el}</p> 
                    </Element>
                )
            })
        }
    </StyledDockMenu>
    )
}


export default function Who() {
    return (
        <Container id="Who">
        <StyledWho>
            <WhoTitle>ABOUT ME</WhoTitle>
            <Paragraph>
            I am a web developer with a vast array of knowledge in many different front end and back languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that i can and to contribute to the technology industry all that i know and can do. I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuosly making strides to learn all that i can about developement.
            </Paragraph>
            <DockMenu />
        </StyledWho>
        </Container>
    )
}
