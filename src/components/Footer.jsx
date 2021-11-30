import { StyledFooter, Container, UpperDiv, BoldText, ContactButton, BottomDiv, LeftDiv, RightDiv, SocialMedia, Icon, SignatureText, MoonBorder} from "./styles/StyledFooter.styled";
import linkedIn from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import twitter from "../assets/icons/twitter.png";
import {useRef} from "react";
const socialMedia = [
    {name: 'linkedIn', logo : linkedIn, url: 'https://www.linkedin.com/in/anass-elamrani-a8b608135/'}, 
    {name: 'github', logo: github, url:'https://github.com/AnassElamrani',}, 
    {name: 'twitter', logo: twitter, url: 'https://twitter.com/elamrani_anass'}
];

export const Footer = () => {
    const mailRef = useRef();
    const goToLink = (e) => {
        console.log(`link${e.target.id}`)
        var logo = document.getElementById(`link${e.target.id}`)
        logo.click();
    }
    const sendMail = () => {
        mailRef.current.click();
    }
    return (
        <StyledFooter>
            <Container id="footer">
                <UpperDiv>
                    <BoldText>
                        Wanna Work Together ?
                    </BoldText>
                    <ContactButton onClick={() => sendMail()}>
                        <p>Contact me</p>
            <a ref={mailRef} style={{display:'none'}} href="mailto:anasselamrani42@gmail.com?subject=coming from portfolio">mail link</a>
                    </ContactButton>
                </UpperDiv>
                <BottomDiv>
                {/* <MoonBorder className="moonBorder"/> */}
                 <LeftDiv>
                     <SignatureText>
                     &#169;  Anass Elamrani. 
                     </SignatureText>
                 </LeftDiv>
                 <RightDiv>
                    <SocialMedia>
                    {/* <p>anasselamrani42@gmail.com</p> */}
                    {
                        socialMedia.map((el, index) => {
                            return (
                                <>
                                <Icon id={index} alt={el.name} src={el.logo} onClick={(e) => goToLink(e)}/>
                                <a target="_blank" id={`link${index}`} href={el.url}></a>
                                </>
                            )
                        })
                    }
                    </SocialMedia>
                </RightDiv>   
                </BottomDiv> 
            </Container>
        </StyledFooter>
    )
}