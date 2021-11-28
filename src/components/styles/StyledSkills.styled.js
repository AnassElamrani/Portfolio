import styled from "styled-components";

export const StyledSkills = styled.div`
margin-top: 50px;
background-color: #101010;
max-width: 500px;
@media only screen and (max-width: 700px) {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  & > span > div {
    margin: 0 auto;
    font-size: 14px;
    transform: translateX(-20px);
    }
  }
`
export const SkillsTitle = styled.h2`
color: #0af755;
`