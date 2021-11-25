import React, {useState} from 'react';
import { StyledDockMenu, Element, Line } from "./styles/StyledDockMenu.styled"
const dock = ["about", "projects", "skills", "contact"];

export const DockMenu = (props) => {
    const {dockNav, changeDockNav} = props;
    const [magEl, setMagEl] = useState();

    const magnify = (e) => {
        setMagEl(e.target.id);
    }

    return (
        <StyledDockMenu>
        {
            dock.map((el, index) => {
                return (
                    <Element
                        className={
                            (dockNav === el || index == magEl) ? 'active': ''
                        }
                        onClick={() => {changeDockNav(el)}}
                        key={index}
                        id={index}
                        onMouseEnter={(e) => {magnify(e)}}
                        onMouseLeave={() => {setMagEl(null)}}
                        mag={magEl}>
                        <p>0{index+1}</p>
                        <Line />
                        <p>{el}</p> 
                    </Element>
                )
            })
        }
    </StyledDockMenu>
    )
}