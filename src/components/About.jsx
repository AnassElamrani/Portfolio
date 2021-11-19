import StyledAbout from "./styles/About.styled";
import Who from "./Who";
import Skills from "./Skills";

export default function About() {
    return (
        <StyledAbout id="about">
            <Who />
            <Skills />
        </StyledAbout>
    )
}
