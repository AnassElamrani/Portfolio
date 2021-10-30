import StyledScrollIndicator from "./styles/ScrollIndicator.styled";

export default function ScrollDownIndicator() {
  return (
      <StyledScrollIndicator>
    <div id="container">
    <div id="borders">
      <div id="dot"></div>
      <div id="arrow"></div>
    </div>
    </div>
      </StyledScrollIndicator>
  );
}
