import { useEffect, useRef, useState } from "react"

export const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({x:0, y:0}); 
    const cursorRef = useRef();

    const cursorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '2px solid cyan',
        position: 'absolute',
        zIndex: '9999',
    }
    const updateCursorPosition = (x, y) => {
        setCursorPosition({x: x, y: y});
    }
    useEffect(() => {
        cursorRef.current.style.left = cursorPosition.x ? cursorPosition.x+'px' : '0px'; 
        cursorRef.current.style.top = cursorPosition.y ? cursorPosition.y+'px' : '0px';
        // console.log('position', position)
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
            ss
        </div>
    )
}
