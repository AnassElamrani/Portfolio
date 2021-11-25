import React, { useState, useRef } from "react";
import { Container, StyledProjects, P, Name, Summary, StyledTitle, LeftDiv, AboutProjects } from "./styles/Projects.styled"

const projects =
    [
        {
            title: 'Matcha',
            description: 'A dating and geosocial networking web application to search for people to match with and chat with them.'
        },
        {
            title: 'Hypertube',
            description: 'A streaming web application to search for your favorite movie to watch.'
        },
        {
            title: 'Camagru',
            description: 'Instgram-like web application where you can take pictures edit them and get likes and comments from others.'
        },
        {
            title: 'Audit Web App',
            description: 'corrupti ipsum! Natus exercitationem ipsam quaerat corporis vitae distinctio.'
        }
    ]



export default function Projects() {

    const [active, setActive] = useState();

    const activate = (e) => {
        console.log(e.target.id)
        setActive(e.target.id);
    }

    return (
        <Container id="Projects">
            <LeftDiv>
                <StyledTitle>
                    Projects
                </StyledTitle>
                <AboutProjects>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam laboriosam est iste nobis ea quibusdam, sed illo velit fugiat magni sapiente exercitationem fugit aliquid vitae nemo eos nulla a.
                </AboutProjects>
            </LeftDiv>
            <StyledProjects>
                {
                    projects.map((Project, index) => {
                        console.log(Project.title)
                        return (
                            <P
                                className={
                                    (index == active) ? 'actived' : ''
                                }
                                id={index}
                                onMouseEnter={(e) => { activate(e) }}
                                onMouseLeave={() => { setActive(null) }}>
                                <Name>
                                    {Project.title}
                                </Name>
                                <Summary>
                                    {Project.description}
                                </Summary>
                            </P>
                        )
                    })
                }
            </StyledProjects>
        </Container>
    )
}
