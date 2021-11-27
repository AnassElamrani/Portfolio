import React, { useState, useRef } from "react";
import { Container, StyledProjects, P, Name, Summary, StyledTitle, LeftDiv, AboutProjects, LogosContainer } from "./styles/Projects.styled"
import htmlLogo from "../assets/icons/html.png";
import mongodbLogo from "../assets/icons/mongodb.png";
import nodejsLogo from "../assets/icons/node-js.png";
import reactjsLogo from "../assets/icons/react.png";
import javascriptLogo from "../assets/icons/javascript.png";
import mysqlLogo from "../assets/icons/mysql.png";
import phpLogo from "../assets/icons/php.png";
import vuejsLogo from "../assets/icons/vuejs.png";
import Skills from "./Skills";

const projects =
    [
        {
            title: 'Matcha',
            description: 'A dating and geosocial networking web application to search for people to match with and chat with them.',
            github: 'https://github.com/AnassElamrani/Matcha-Tinder-like-App',
            stack: [nodejsLogo, reactjsLogo, mysqlLogo]
        },
        {
            title: 'Hypertube',
            description: 'A streaming web application to search for your favorite movie to watch.',
            github: 'https://github.com/AnassElamrani/Hypertube',
            stack: [nodejsLogo, vuejsLogo, mongodbLogo]
        },
        {
            title: 'Camagru',
            description: 'Instgram-like web application where you can take pictures edit them and get likes and comments from others.',
            github: 'https://github.com/AnassElamrani/Camagru-App',
            stack: [phpLogo, javascriptLogo, htmlLogo]
        },
        {
            title: 'Audit Web App',
            description: 'corrupti ipsum! Natus exercitationem ipsam quaerat corporis vitae distinctio.',
            github: 'https://github.com/AnassElamrani/dataprotect',
            stack: [reactjsLogo]
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
                    SKILLS - PROJECTS
                </StyledTitle>
                {/* <AboutProjects>
                    All along my journey of coding i have been working and still on reach and interesting projects with different stacks , mainly with JavaScript and it's frameworks and libraries.
                    with a team or solo i enjoy building web applications and enhance them.
                </AboutProjects> */}
                <Skills />
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
                                <LogosContainer>
                                {
                                    Project.stack.map((stack) => {
                                        return (
                                                <img src={stack} alt="" />
                                                )
                                                
                                            })
                                        }
                                </LogosContainer>
                            </P>
                        )
                    })
                }
            </StyledProjects>
        </Container>
    )
}
