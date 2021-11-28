import styled from "styled-components";

export const StyledCore = styled.div`
position: relative;
height: 100vh;
min-height: 1020px;
background-color: black;
color: white;
// border: 1px solid white;
display: flex;
align-items: center;
font-family: 'Abel', sans-serif;
@media only screen and (max-width:700px){
    height: 100%;
    min-height: none;
  }
`



export const Big = styled.div`
display : flex;
flex-direction: column;
width: 80%;
height: 80%;
margin: 0 auto;
`

