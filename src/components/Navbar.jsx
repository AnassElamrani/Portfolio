import {useState} from 'react';
import StyledNavbar, {Logo, RightGroup, GetInTouchButton} from "./styles/StyledNavbar.styled";

export default function Navbar() {

    const [view, setView] = useState();

    const scrollIntoView = (e) => {
        e.preventDefault();
        console.log('target', e.target.className);
        if(document.getElementById(e.target.className))
            document.getElementById(e.target.className).scrollIntoView({behavior: 'smooth'});
    }

    return (
        <StyledNavbar>
            <Logo>AE</Logo>
            <RightGroup>
            <div class="about" onClick={scrollIntoView}>About</div>
            <div class="projects" onClick={scrollIntoView}>Projects</div>
            <GetInTouchButton class="contact" onClick={scrollIntoView}>
                Get in touch
            </GetInTouchButton>
            </RightGroup>
        </StyledNavbar>
    )
}
