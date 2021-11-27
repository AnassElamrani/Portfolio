import React, { useState, useEffect } from "react";
import { StyledCore, Big } from "./styles/Core.styled";
import Projects from "./Projects";
import { DockMenu } from "./DockMenu";
import About from "./About";
import Skills from "./Skills";

export default function Core() {
    const [dockNav, setDockNav] = useState('about');
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    const switchDockNav = (to) => {
        setDockNav(to);
    }

    return (
        <StyledCore id="core">
            <Big id="big">
                {
                    width > 700 ?
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
