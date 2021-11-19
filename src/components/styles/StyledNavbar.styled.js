import styled from 'styled-components'

const StyledNavbar = styled.div`
margin: auto;
width: 100%;
height: 65px;
display: flex;
color: white;
align-items: center;
font-family: 'Abel', sans-serif;
font-size: 16px;
gap: 10px;
text-transform: uppercase;
cursor: pointer;
`
export const Logo = styled.div`
flex-grow: 4;
margin-left: 70px;
color:#0af755;
`

export const RightGroup = styled.div`
display: flex;
gap: 14px;
margin-right: 70px;
& > div {
    &:hover 
    {
        color:#0af755;
    }
}
`

export const GetInTouchButton = styled.div`
width: 90px;
text-align: center;
`

export default StyledNavbar;