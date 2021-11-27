import {useState} from 'react';
import StyledNavbar, {Logo, RightGroup, GetInTouchButton} from "./styles/StyledNavbar.styled";

export default function Navbar() {

    const [view, setView] = useState();

    const scrollIntoView = (e) => {
        e.preventDefault();
        console.log('target', e.target.className);
        if(document.getElementById(e.target.className))
            document.getElementById(e.target.className).scrollIntoView({behavior: 'smooth'});
        else 
            console.log('could not find the component');
    }

    return (
        <StyledNavbar>
            <Logo>AE</Logo>
            <RightGroup>
            <div className="big" onClick={scrollIntoView}>About</div>
            {/* <div className="projects" onClick={scrollIntoView}>Projects</div> */}
            {/* <GetInTouchButton className="contact" onClick={scrollIntoView}>
                Get in touch
            </GetInTouchButton> */}
            </RightGroup>
        </StyledNavbar>
    )
}
