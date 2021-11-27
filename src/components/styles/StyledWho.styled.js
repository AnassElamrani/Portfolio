import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`
export const StyledWho = styled.div`
display: flex;
flex-direction: column;
@media only screen and (max-width: 700px) {
    align-items: center;
}
`



export const Paragraph = styled.p`
color: gray;
font-size: 20px;
width: 70%;
margin-bottom: 4vh;
@media only screen and (max-width: 700px) {
    font-size: 14px;
}
`