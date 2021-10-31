import styled from "styled-components";


const StyledScrollIndicator = styled.div`

#container {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, 0);
    animation: trans 2s;
    animation-delay: 5s;
    animation-fill-mode: forwards;
    opacity: 0;
}
#borders {
  width: 30px;
  height: 80px;
  border: 1px solid #ff5722;
  border-radius: 40px;
  position: relative;
}

#dot {
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0);
  animation: move 2s infinite;
}

#arrow {
  width: 15px;
  height: 15px;
  border: solid white;
  border-width: 4px 4px 0 0;
  left: 50%;
  top: 100%;
  position: absolute;
  transform-origin: left;
  transform: rotate(135deg) translate(-50%, 0);
  animation: trans 2s infinite;
}

@keyframes move {
  from {
    top: 10%;
    left: 50%;
    opacity: 1;
  }
  to {
    top: 65%;
    left: 50%;
    opacity: 0.6;
  }
}

@keyframes trans {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
}

`

export default StyledScrollIndicator;