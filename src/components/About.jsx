import React , {useState} from "react";
import { Container, StyledAbout } from "./styles/About.styled";
import Who from "./Who";
import Projects from "./Projects";

export default function About() {
const [dockNav, setDockNav] = useState('projects');

const switchDockNav = (to) => {
    setDockNav(to);
}

    return (
        <StyledAbout id="about">
            <Container>
                <Who  dockNav={dockNav} switchDockNav={switchDockNav} />
                {

                        dockNav === 'Projects' ? <Projects /> : ''
                }
            </Container>
        </StyledAbout>
    )
}
