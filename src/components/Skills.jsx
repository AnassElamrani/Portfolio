
import React, { useEffect } from "react";
import { StyledSkills, SkillsTitle } from "./styles/StyledSkills.styled";
import TagCloud from "TagCloud"

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'redux', 'ReactJs',
    'PHP',
    'mongoDb', 'Vuejs', 'git',
    'Docker', 'Node.js', 'redis',
    'websocket', 'MySQL', 'jQuery',
];

export default function Skills() {

    useEffect(() => {
        var tagCloud= TagCloud('.content', myTags,{

            // radius in px
            radius: 220,
          
            // animation speed
            // slow, normal, fast
            maxSpeed: 'slow',
            initSpeed: 'slow',
          
            // 0 = top
            // 90 = left
            // 135 = right-bottom
            direction: 135,
            
            // interact with cursor move on mouse out
            keep: true
            
          });
          
          document.querySelector('.content').style.color = 'white';

    }, [])
    return (
        <StyledSkills>
            {/* <SkillsTitle>- Skills</SkillsTitle> */}
            <span class="content"></span>
        </StyledSkills>
    )
}
