import styled from "styled-components"

export const StyledFooter = styled.div`
margin: 0;
width: 100%;
height: 400px;
background-color: black;
display: flex;
flex-direction: column;
justify-content: end;
`

export const Container = styled.div`
height: 70%;
border-top: 1px solid #212022;
background-color: #141414;
display: flex;
flex-direction: column;
gap: 80px;
postion: relative;
`

export const UpperDiv = styled.div`
width: 70%;
max-width: 1100px;
height: 40%;
margin: 0 auto;
display: flex;
// border: 1px green solid;
align-items: center;
justify-content: space-between;
@media only screen and (max-width:700px){
    flex-direction : column;
  }
`
export const BoldText = styled.h2`
color: #e1e0e0;
font-family: 'Abril Fatface';
cursor: default;
`

export const ContactButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: #3a3a3a 1px solid;
border-radius: 10px;
color: #e1e0e0;
height: fit-content;
padding: 0 10px;
font-family: 'Abel', sans-serif;
cursor: default;
transition: ease 0.5s;
&:hover {
    // color:#0af755;
    border: 1px solid white;
}
`

export const BottomDiv = styled.div`
display: flex;
width: 70%;
max-width: 1100px;
align-items: center;
justify-content: space-between;
// border: 1px solid orange;
margin: 0 auto;
font-family: 'Abel', sans-serif;
`
export const RightDiv = styled.div`
// border: 1px gray solid;
color: #E4E3E6;
`

export const LeftDiv = styled.div`
// border: 1px green solid;
`
export const SocialMedia = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
& > a {
    display: hidden;
}
`
export const Icon = styled.img`
width: 30px;
aspect-ration: 1;
`

export const SignatureText = styled.p`
color: white;
`

export const MoonBorder = styled.div`
width: 100%;
height: 300px;
position: absolute;
bottom: 0;
left: 0;
border: solid 5px gray;
border-color: gray none none none;
border-radius: 50%/100px 100px 0 0;
`