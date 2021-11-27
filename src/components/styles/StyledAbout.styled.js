import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 10px;
width: 100%;
height: 80%;
@media only screen and (max-width: 700px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
}
`

export const ImgDiv = styled.div`
flex-direction: column;
    display: flex;
    justify-content: start;
    & > img {
        border-radius: 50%;
        width: 23vw;
        max-width: 300px;
    }
`
export const WhoTitle = styled.h4`
@media only screen and (max-width: 700px) {
    font-size: 20px;
}
color: white;
font-size: 60px;
`