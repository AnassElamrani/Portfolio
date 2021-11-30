import React, {useState} from 'react';
import { StyledDockMenu, Element, Line } from "./styles/StyledDockMenu.styled"
const dock = ["about", "skills & projects"];

export const DockMenu = (props) => {
    const {dockNav, switchDockNav} = props;
    const [magEl, setMagEl] = useState();

    const magnify = (e) => {
        setMagEl(e.target.id);
    }
    
    return (
        <StyledDockMenu className="dockMenu">
        {
            dock.map((el, index) => {
                return (
                    <Element
                        className={
                            (dockNav === el || index == magEl) ? 'active': ''
                        }
                        onClick={(e) => {
                            console.log('target', e.target);

                            switchDockNav(el)}}
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