import Welcome from "./styles/Welcome.styled";
import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";
import React, {useEffect} from "react"

export default function StyledWelcome() {

    useEffect(() => {
        console.log('x')
    })

    return (
    <Welcome>
        <Particles params={particlesConfig} />
    </Welcome>        
    )
}
