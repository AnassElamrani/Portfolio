import { Container, StyledSkills, P, Name, Summary} from "./styles/Skills.styled"

const Projects = 
[
    {
        title : 'Matcha',
        description : 'A dating and geosocial networking web application to search for people to match with and chat with them.'
    },
    {
        title: 'Hypertube',
        description: 'A streaming web application to search for your favorite movie to watch.'
    },
    {
        title: 'Camagru',
        description: 'Instgram-like web application where you can take pictures edit them and get likes and comments from others.'
    },
    {
        title: 'Audit Web App',
        description: 'corrupti ipsum! Natus exercitationem ipsam quaerat corporis vitae distinctio.'
    }
]



export default function Skills() {
    return (
        <Container id="skills">
            <StyledSkills>
                {
                    Projects.map((Project) => {
                        console.log(Project.title)
                        return (
                            <P>
                                <Name>
                                    {Project.title}
                                </Name>
                                <Summary>
                                    {Project.description}
                                </Summary>
                            </P>
                        )
                    })
                }
            </StyledSkills>
        </Container>
    )
}
