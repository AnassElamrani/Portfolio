import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 80%;
display: flex;
`

export const StyledProjects = styled.div`
margin-top: 10vh;
display: flex;
flex-direction: column;
gap: 4px;
border-radius: 4px;
`
export const P = styled.div`
background-color: #212022;
height: 100%;
padding: 5px 0 10px 18px;
transition: border .3s ease;
`

export const Name = styled.h4`
color: white;
`
export const Summary = styled.p`
color: #A5A5A7;
font-size: 16px;
`

export const  StyledTitle = styled.h4`
font-size: 50px;
color: white;
`

export const LeftDiv = styled.div`
display: flex;
flex-direction: column;
width: 80%;
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