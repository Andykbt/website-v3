import React, { useState } from "react";
import { CardContainer, ToolsContainer } from "./card-styled";
import Image from "next/image";
import { H3, Body2 } from "@website-v3/web/styles/typography";
import { ExpandBorder } from "@website-v3/web/helpers/springs";
import { colourBlack, fontSizeSmall } from "@website-v3/web/styles";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import { Button } from "../button";

type CardProps = {
  title: string,
  excerpt?: any[] | string,
  href: string,
  canCopy?: boolean,
  image?: string,
  isSmall?: boolean,
  badgeText?: string,
}

export const Card: React.FC<CardProps> = ({
  title,
  excerpt,
  href,
  canCopy,
  image,
  isSmall,
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

      <div style={{margin: "0.75em 0"}}>
        <H3 fontSize={fontSizeSmall}>{title}</H3>
        {excerpt &&
          <Body2><PortableText value={excerpt}/></Body2>
        }
      </div>

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
