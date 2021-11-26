import React, { useState } from "react";
import { StyledCore, Big } from "./styles/Core.styled";
import Projects from "./Projects";
import { DockMenu } from "./DockMenu";
import About from "./About";
import Skills from "./Skills";

export default function Core() {
    const [dockNav, setDockNav] = useState('about');

    const switchDockNav = (to) => {
        setDockNav(to);
    }

    return (
        <StyledCore id="core">
            <Big id="big">
                {
                    (dockNav === 'about') ? <About /> : (dockNav === 'projects') ? <Projects /> : <Skills /> 
                }
                <DockMenu dockNav={dockNav} switchDockNav={switchDockNav} />
            </Big>
        </StyledCore>
    )
}
