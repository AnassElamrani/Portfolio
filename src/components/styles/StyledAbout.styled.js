import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 10px;
width: 100%;
height: 80%;
`

export const ImgDiv = styled.div`
flex-direction: column;
    display: flex;
    justify-content: center;
    & > img {
        border-radius: 50%;
        width: 23vw;
        max-width: 300px;
    }
`