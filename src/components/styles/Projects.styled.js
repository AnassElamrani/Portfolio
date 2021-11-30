import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 80%;
gap: 3vw;
display: flex;
@media only screen and (max-width:700px){
  flex-direction: column;
}
`

export const StyledProjects = styled.div`
margin-top: 10vh;
display: flex;
flex-direction: column;
gap: 4px;
border-radius: 4px;
@media only screen and (max-width:700px){
  margin: auto;
  width: 70%;
}
`
export const P = styled.div`
background-color: #212022;
height: 100%;
padding: 5px 0 10px 18px;
transition: border .3s ease;
position: relative;
`

export const Name = styled.h4`
color: white;
`
export const Summary = styled.p`
color: #A5A5A7;
font-size: 16px;
@media only screen and (max-width: 700px) {
  font-size: 14px;
}
`

export const  StyledTitle = styled.h4`
font-size: 50px;
color: white;
@media only screen and (max-width: 700px) {
    font-size: 20px;
  }
`

export const LeftDiv = styled.div`
display: flex;
flex-direction: column;
width: 80%;
@media only screen and (max-width: 700px) {
  width: 100%;
}
`

export const AboutProjects = styled.p`
color: #A5A5A7;
width: 70%;
`
export const LogosContainer = styled.div`
display: flex;
gap: 4px;
& img {
    padding: 3px;
    width: 21px;
    background: #ffffff;
    border-radius: 50%;
    // filter: grayscale(1);
}
`

export const SummaryText = styled.p`
font-size: 16px;
color: #9e9e9e;
width: 80%;
@media only screen and (max-width: 700px) {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  font-size: 14px;
}
`
export const GithubLogo = styled.img`
position: absolute;
right: 0;
bottom: 0;
width: 30px;
border-radius: 50%;
`