import styled from "styled-components";

export const StyledDockMenu = styled.div`
width: 50%;
display: flex;
flex-direction: column;
color: white;
@media only screen and (max-width: 700px) {
    display:none;
    color: #0af755;
}
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