import React, { useState } from "react";
import { CardContainer, ToolsContainer } from "./card-styled";
import Image from "next/image";
import { H3, Body2 } from "@website-v3/web/styles/typography";
import { ExpandBorder } from "../../helpers/springs";
import { colourBlack, fontSizeMedium } from "@website-v3/web/styles";
import { PortableText } from "@portabletext/react";
import { Button } from "../button";
import { useRouter } from "next/router";

type CardProps = {
  title: string,
  excerpt: any[],
  href: string,
  canCopy?: boolean,
  image?: string,
}

export const Card: React.FC<CardProps> = ({
  title,
  excerpt,
  href,
  canCopy,
  image
}) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  return (
    <CardContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <a data-testid={"card.redirect-link"} onClick={() => router.push(`/projects/${href}`)}>
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
        <H3 margin="0.35em 0" fontSize={fontSizeMedium}>{title}</H3>
        <Body2><PortableText value={excerpt}/></Body2>
      </>

      { canCopy &&
        <ToolsContainer
          data-testid={"card.copy-url"}
        >
          <Button
            label="Click to copy url"
            background={colourBlack}
            onClick={() => navigator.clipboard.writeText(`http://andykbt.net/projects/${href}`)}
          />
        </ToolsContainer>
      }
    </CardContainer>
  );
};
