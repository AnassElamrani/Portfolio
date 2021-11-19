import StyledWelcome from "../components/Welcome"
import About from "../components/About";

export default function Home() {
    return (
        <div>
            <StyledWelcome />
            <About id="about"/>
        </div>
    )
}
