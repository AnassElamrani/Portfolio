import { useEffect, useRef, useState } from "react"

export const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({x:0, y:0}); 
    const cursorRef = useRef();

    const cursorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '2px solid #09f755',
        // backgroundColor: '#09f755',
        position: 'absolute',
        zIndex: '9999',
        transition: 'ease',
        // transform: 'translate3d(-50%, -50%)',
    }
    const updateCursorPosition = (x, y) => {
        cursorRef.current.style.left = cursorPosition.x ? cursorPosition.x+'px' : '0px'; 
        cursorRef.current.style.top = cursorPosition.y ? cursorPosition.y+'px' : '0px';
        setCursorPosition({x: x, y: y});
    }
    useEffect(() => {
        console.log('position', cursorPosition)
        const mouseEvent = (e) => {
            console.log('mouse-position', e.offsetX, ' - ', e.offsetY)
            updateCursorPosition(e.offsetX, e.offsetY);
        }
        document.addEventListener('mousemove', mouseEvent)
        return (() => {
            document.removeEventListener("mousemove", mouseEvent);
        })
    })
    return (
        <div id="cursor" ref={cursorRef} style={cursorStyle}>
        </div>
    )
}
