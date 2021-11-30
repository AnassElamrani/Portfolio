import { useEffect, useState, createContext } from "react";
import StyledWelcome from "../components/Welcome"
import Core from "../components/Core";
import {MobileContext} from "../components/MobileContext";
import {Cursor} from "../utils/Cursor";
import { Footer } from "../components/Footer";

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
        <div id="parent">
            <StyledWelcome />
            <Core id="core">
                {/* <Cursor /> */}
            </Core>
            <Footer />
        </div>
        </MobileContext.Provider>
    )
}
