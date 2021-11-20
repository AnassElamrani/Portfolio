import React, { useEffect, useRef } from "react";
import StyledScrollIndicator from "./styles/ScrollIndicator.styled";
import gsap from "gsap"

export default function ScrollDownIndicator() {
  const scrollRef = useRef(null);

  const fadeOut = () => {
    if(scrollRef.current != null && scrollRef.current.style.display != 'none')
    {
      gsap.to(scrollRef.current, {opacity:0})
    }
  }
  const removeEvent = () => {
    window.removeEventListener("scroll", fadeOut);
}
  useEffect(() => {
    window.addEventListener("scroll", fadeOut)
    console.log(scrollRef);
    return () => {
      removeEvent();
    }
  }, [scrollRef])

  return (
    <StyledScrollIndicator ref={scrollRef} >
              <button onClick={removeEvent}>Test</button>
      <div id="container">
        <div id="borders">
          <div id="dot"></div>
          <div id="arrow"></div>
        </div>
      </div>
    </StyledScrollIndicator>
  );
}
