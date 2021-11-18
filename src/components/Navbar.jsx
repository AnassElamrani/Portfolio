import StyledNavbar, {Logo} from "./styles/StyledNavbar.styled";

export default function Navbar() {
    return (
        <StyledNavbar>
            {/* <Logo>AE</Logo> */}
            <div id="about">About</div>
            <div id="projects">Projects</div>
            <div id="contact">Contact</div>
        </StyledNavbar>
    )
}
