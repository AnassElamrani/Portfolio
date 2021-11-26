
import React, { useEffect } from "react";
import { StyledSkills } from "./styles/StyledSkills.styled";
import TagCloud from "TagCloud"

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'OpenCV',
    'GCP', 'MySQL', 'jQuery',
];

export default function Skills() {

    useEffect(() => {
        var tagCloud= TagCloud('.content', myTags,{

            // radius in px
            radius: 220,
          
            // animation speed
            // slow, normal, fast
            maxSpeed: 'normal',
            initSpeed: 'normal',
          
            // 0 = top
            // 90 = left
            // 135 = right-bottom
            direction: 135,
            
            // interact with cursor move on mouse out
            keep: true
            
          });
          
          //To change the color of text randomly
          document.querySelector('.content').style.color = '#09f755';
    }, [])
    return (
        <StyledSkills>
            <span class="content"></span>
        </StyledSkills>
    )
}
