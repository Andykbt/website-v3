import {
    colourBlack,
    colourCyan,
    colourLightBrown,
    colourPink,
    colourPurple,
    colourYellow,
} from '@website-v3/web/styles';
import React from 'react';
import styled from 'styled-components';

type Props = {
    label: string;
    hover: boolean;
};

const Container = styled.div<{
    background: string | undefined;
    text: string;
    hover: boolean;
}>`
  width: fit-content;
  height: fit-content;
  position: absolute;
  background-color: ${colourBlack};
  bottom -15px;
  padding: 6.5px 5px;
  border-radius: 50px;
  left: 3%;
  z-index: 1;
  transition: all 0.125s ease-in;
  box-shadow: ${(props) =>
      props.hover
          ? `0 0 0 4px ${colourBlack}, 0 0 0 6px ${colourLightBrown}, 0 0 ${colourLightBrown}, 0 0 ${colourLightBrown}`
          : 0};

  &::before {
    content: "${(props) => props.text}";
    height: fit-content;
    width: fit-content;
    background: ${(props) => props.background};
    color: ${colourBlack};
    padding: 2.5px 10px;
    border-radius: 50px;
  }
`;

const Badge = ({ label, hover }: Props) => {
    const colours = new Map([
        ['Self', colourYellow],
        ['Tech', colourCyan],
        ['Work', colourPink],
        ["What I've been watching", colourPurple],
        ["What I've been reading", colourPurple],
    ]);

    const colour = colours.get(label);

    return <Container background={colour} text={label} hover={hover} />;
};

export default Badge;
