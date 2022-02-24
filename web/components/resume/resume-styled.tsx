import styled from "styled-components";

export const ResumePageWrapped = styled.div`
  background-image: url("/stars.gif");
`;

export const EmbedWrapper = styled.div`
  padding-top: 115%;
  position: relative;
  margin: auto;
  width: 80vw;
  height: 0;

  & > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;