import React, { useState } from "react";
import Image from "next/image";
import { Body1, H2 } from "../../styles";
import ArrowSvg from "../../styles/svg/Arrow-svg";
import { Container, Hit, HitBody } from "./searchResults-styled";
import { useRouter } from "next/router";

export const SearchResults = ({
  hits
}: { hits: any[] }) => {
  const [hovered, setHovered] = useState<string | undefined>();

  const renderHits = () => {
    return hits.map((item) => {
      const router = useRouter();

      return (
        <Hit
          onMouseDown={() => router.push(`/blog/${item.slug}`)}
          key={item.entityId}
          onMouseEnter={() => setHovered(item.entityId)}
          onMouseLeave={() => setHovered("")}
        >
          <Image
            src="/stars.gif"
            width={100}
            height={100}
          />
          <HitBody>
            <H2>{item.title}</H2>
            <Body1>{item.excerpt}</Body1>
          </HitBody>

          <ArrowSvg 
            width={100} 
            height={100} 
            isHovered={item.entityId === hovered}
          />
        </Hit>
      );
    });
  };

  if (hits.length === 0) {
    return <></>;
  }

  return (
    <Container>
      {renderHits()}
    </Container>
  );
};