import StyledWelcome from "../components/Welcome"
import StyledAbout from "../components/styles/About.styled";
import {useRef, useEffect} from "react";
import {gsap} from "gsap";

export default function Home() {
    const square = useRef(null);
    let tween = gsap.to(square.current, {rotation: 360, duration: 5, ease: "elastic"});
    
    const triggerAnimation = () => {
        console.log(square.current)
        // alert(1)
        if(square != null)
            tween.resume();
    }
    return (
        <div>

            {/* <div onClick={triggerAnimation} ref={square} style={{width:'50px', height:"50px", backgroundColor:"green"}}>gsap</div> */}
        {/* <div> */}
            <StyledWelcome />
            <StyledAbout id="about" />
        </div>
        // </div>
    )
}
