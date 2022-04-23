import React from "react";
import { colourBlack, colourCyan, colourPink, colourPurple, colourYellow } from "@website-v3/web/styles";
import styled from "styled-components";


type Props = {
  label: string,
}

const Container = styled.div<{background: string | undefined}>`
  width: fit-content;
  padding: 2.5px 10px;
  text-align: center;
  border-radius: 50px;
  color: ${colourBlack};
  background: ${props => props.background};
`;

const Badge = ({
  label
}: Props) => {
  const colours = new Map([
    ["Self", colourYellow],
    ["Tech", colourCyan],
    ["Work", colourPink],
    ["What I've been watching", colourPurple],
    ["What I've been reading", colourPurple],
  ]);

  const colour = colours.get(label);
  
  return (
    <Container background={colour}>{label}</Container>
  );
};

export default Badge;