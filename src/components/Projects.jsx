import React, { useState, useRef, useEffect } from "react";
import { Container, StyledProjects, P, GithubLogo, Name, Summary, StyledTitle, LeftDiv, SummaryText,AboutProjects, LogosContainer, TechText } from "./styles/Projects.styled"
import htmlLogo from "../assets/icons/html.png";
import mongodbLogo from "../assets/icons/mongodb.png";
import nodejsLogo from "../assets/icons/node-js.png";
import reactjsLogo from "../assets/icons/react.png";
import javascriptLogo from "../assets/icons/javascript.png";
import mysqlLogo from "../assets/icons/mysql.png";
import phpLogo from "../assets/icons/php.png";
import vuejsLogo from "../assets/icons/vuejs.png";
import djangoLogo from "../assets/icons/django.png";
import sqliteLogo from "../assets/icons/sqlite.png";
import Skills from "./Skills";
import githubLogo from "../assets/icons/githubLogo.png";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects =
    [
        {
            title: 'Matcha',
            description: 'A dating and geosocial networking web application to search for people to match with and chat with them.',
            github: 'https://github.com/AnassElamrani/Matcha-Tinder-like-App',
            stack: [nodejsLogo, reactjsLogo, mysqlLogo],
            tech: ['ReactJs.','material-ui.', 'NodeJs.','expressJs.','mySql.','socket.io.', 'multer.', 'jwt.', 'oAuth.', 'passportJs.']
        },
        {
            title: 'Hypertube',
            description: 'A streaming web application to search for your favorite movie to watch.',
            github: 'https://github.com/AnassElamrani/Hypertube',
            stack: [nodejsLogo, vuejsLogo, mongodbLogo],
            tech: ['Vuejs.', 'NodeJs.','expressJs.','mongodb.','nuxt.', 'multer.', 'jwt.', 'oAuth.']
        },
        {
            title: 'Camagru',
            description: 'Instgram-like web application where you can take pictures edit them and get likes and comments from others.',
            github: 'https://github.com/AnassElamrani/Camagru-App',
            stack: [phpLogo, javascriptLogo, htmlLogo],
            tech: ['PHP.','bootstrap.', 'webRTC.','mySql.']
        },
        {
            title: 'Audit Web App',
            description: 'Intership project, worked on the front-end to build an audit web application that run scans on machines to check for system errors and vulnerabilities and visualize the result in form of graphes and tables.',
            github: 'https://github.com/AnassElamrani/dataprotect',
            stack: [reactjsLogo, djangoLogo, sqliteLogo],
            tech: ['ReactJs.','material-ui.', 'chartJs.','sqlite.','mongodb.','jwt.', 'axios.']
        }
    ]



export default function Projects() {

    const [active, setActive] = useState();
    const linkRefs = useRef([]);

    useEffect(() => {
        console.log('Projects')
       
        gsap.registerPlugin(ScrollTrigger);
        gsap.from("#Projects", 
            {
                scrollTrigger: {
                    trigger: '#projects',
                    toggleActions: "restart none none none"
                },
            
            opacity: 0,
            x: -100,
            duration: 1
        });
     
    }, [])

    const activate = (e) => {
        console.log(e.target.id)
        setActive(e.target.id);
    }

    const triggerLinkClick = (i) => {
        linkRefs.current[i].click();
    }
    return (
        <Container id="Projects">
            <LeftDiv>
                <StyledTitle>
                    SKILLS - PROJECTS
                </StyledTitle>
                <SummaryText>
                    In more than 4 years of coding, i have been working on some really intersting web projects that allowed me to learn deeply different stacks mainly around Javascript, when and how to use them.
                </SummaryText>
                <Skills />
            </LeftDiv>
            <StyledProjects>
                {
                    projects.map((Project, index) => {
                        
                        return (
                            <P
                                key={index}
                                className={
                                    (index == active) ? 'actived' : ''
                                }
                                onClick={() => triggerLinkClick(index)}
                                id={index}
                                onMouseEnter={(e) => { activate(e) }}
                                onMouseLeave={() => { setActive(null) }}>
                                <a href={Project.github} 
                                target="_blank"
                                ref={(el) =>  linkRefs.current[index] = el 
                                }
                                ></a>
                                <GithubLogo img src={githubLogo}>
                                    {/* < alt="githubLogo" /> */}
                                </GithubLogo>
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
                                    <TechText>
                                {
                                    Project.tech.map((tech) => {
                                        return (
                                                <p>{tech}</p>
                                                )
                                                
                                            })
                                        }
                                        </TechText>
                            </P>
                        )
                    })
                }
            </StyledProjects>
        </Container>
    )
}
