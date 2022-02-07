import React, { useState } from "react";
import { CardContainer, ToolsContainer } from "./card-styled";
import Image from "next/image";
import { H3, Body1, Body2 } from "../../styles";
import { ExpandBorder } from "../../helpers/springs";
import { fontSizeMedium } from "@website-v3/web/styles";
import { PortableText } from "@portabletext/react";
import { Button } from "../button";

type CardProps = {
  title: string,
  excerpt: any[],
  href: string,
  canCopy?: boolean,
}

export const Card: React.FC<CardProps> = ({
  title,
  excerpt,
  href,
}) => {
  const [hover, setHover] = useState(false);
  
  return (
    <CardContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <a href={href}>
        <ExpandBorder on={hover}>
          <Image
            src="/stars.gif"
            width={500}
            height={500}
          />
        </ExpandBorder>
        <H3 margin="0.35em 0" fontSize={fontSizeMedium}>{title}</H3>
        <Body2><PortableText value={excerpt}/></Body2>
      </a>
      <ToolsContainer>
        <Button
          label="Click to copy url"
          onClick={() => navigator.clipboard.writeText(href)}
        />
      </ToolsContainer>
    </CardContainer>
  );
};
