import React, { useState } from "react";
import { CardContainer } from "./card-styled";
import Image from "next/image";
import { H3, Body1 } from "../../styles";
import { ExpandBorder } from "../../helpers/springs";
import { fontSizeMedium } from "@website-v3/web/styles";

export const Card = () => {
  const [hover, setHover] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>

      <ExpandBorder on={hover}>
        <Image
          src="/stars.gif"
          width={500}
          height={500}
        />
      </ExpandBorder>
      
      <H3 margin="0.35em 0" fontSize={fontSizeMedium} >Card Title</H3>
      <Body1>This is the body text</Body1>
    </CardContainer>
  );
};
