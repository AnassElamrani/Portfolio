import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`
export const StyledWho = styled.div`
display: flex;
flex-direction: column;
`

export const WhoTitle = styled.h4`
color: white;
font-size: 60px;
`

export const Paragraph = styled.p`
color: gray;
font-size: 1.8vh;
width: 70%;
margin-bottom: 4vh;
`

export const StyledDockMenu = styled.div`
display: flex;
flex-direction: column;
color: white;
`

export const Element = styled.div`
display : flex;
gap: 10px;
align-items: center;
color: gray;

& > p {
    line-height : 2px;
    transition: font-size .6s, color .6s;
    // transition-timing-function: linear;
}
`

export const Line = styled.div`
height: 1px;
width: 42px;
background-color: gray;
`