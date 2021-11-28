import React, { useState, useContext }  from "react";
import { StyledCore, Big } from "./styles/Core.styled";
import Projects from "./Projects";
import { DockMenu } from "./DockMenu";
import About from "./About";
import Skills from "./Skills";
import { MobileContext } from "./MobileContext";

export default function Core() {
    const [dockNav, setDockNav] = useState('about');
    const isMobile = useContext(MobileContext)
    const switchDockNav = (to) => {
        setDockNav(to);
    }

    return (
        <StyledCore id="core">
            <Big id="big">
                {
                    !isMobile ?
                    (dockNav === 'about') ? <About /> : <Projects />
                    :
                    <>
                            <About />
                            <Projects />
                        </>
                }
                <DockMenu dockNav={dockNav} switchDockNav={switchDockNav} />
            </Big>
        </StyledCore>
    )
}
