import { StyledFooter, Container, UpperDiv, BoldText, ContactButton, BottomDiv, LeftDiv, RightDiv, SocialMedia, Icon, SignatureText, MoonBorder} from "./styles/StyledFooter.styled";
import linkedIn from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import twitter from "../assets/icons/twitter.png";
const socialMedia = [linkedIn, github, twitter];

export const Footer = () => {
    return (
        <StyledFooter>
            {/* <a href="mailto:anasselamrani42@gmail.com?subject=subject">mail link</a> */}
            <Container>
                <UpperDiv>
                    <BoldText>
                        Wanna Work Together ?
                    </BoldText>
                    <ContactButton>
                        <p>Contact me</p>
                    </ContactButton>
                </UpperDiv>
                <BottomDiv>
                {/* <MoonBorder className="moonBorder"/> */}
                 <LeftDiv>
                     <SignatureText>
                         Made by Anass Elamrani
                     </SignatureText>
                 </LeftDiv>
                 <RightDiv>
                    <SocialMedia>
                    <p>anasselamrani42@gmail.com</p>
                    {
                        socialMedia.map((el) => {
                            return <Icon src={el}/>
                        })
                    }
                    </SocialMedia>
                </RightDiv>   
                </BottomDiv> 
            </Container>
        </StyledFooter>
    )
}