import { useEffect, useState, createContext } from "react";
import StyledWelcome from "../components/Welcome"
import Core from "../components/Core";
import {MobileContext} from "../components/MobileContext";

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    // const mobileContext = createContext(false);

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth > 700 ? setIsMobile(false) : setIsMobile(true);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })
    return (
        <MobileContext.Provider value={isMobile}>
        <div>
            <StyledWelcome />
            <Core id="core"/>
        </div>
        </MobileContext.Provider>
    )
}
