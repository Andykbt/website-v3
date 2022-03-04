import React, { useState } from "react";
import { CardContainer, ToolsContainer } from "./card-styled";
import Image from "next/image";
import { H3, Body2 } from "@website-v3/web/styles/typography";
import { ExpandBorder } from "@website-v3/web/helpers/springs";
import { colourBlack, fontSizeSmall } from "@website-v3/web/styles";
import { PortableText } from "@portabletext/react";
import { Button } from "../button";
import { useRouter } from "next/router";

type CardProps = {
  title: string,
  excerpt: any[] | string,
  href: string,
  canCopy?: boolean,
  image?: string,
  isSmall?: boolean,
}

export const Card: React.FC<CardProps> = ({
  title,
  excerpt,
  href,
  canCopy,
  image,
  isSmall
}) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  return (
    <CardContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      isSmall={isSmall || false}>
      <a data-testid={"card.redirect-link"} onClick={() => router.push(href)}>
        <ExpandBorder on={hover}>
          <Image
            src={image || "/stars.gif"}
            width={750}
            height={750}
            objectFit={"cover"}
          />
        </ExpandBorder>
      </a>

      <>
        <H3 margin="0.35em 0" fontSize={fontSizeSmall}>{title}</H3>
        <Body2><PortableText value={excerpt}/></Body2>
      </>

      { canCopy &&
        <ToolsContainer
          data-testid={"card.copy-url"}
        >
          <Button
            label="Click to copy url"
            background={colourBlack}
            onClick={() => navigator.clipboard.writeText(href)}
          />
        </ToolsContainer>
      }
    </CardContainer>
  );
};
