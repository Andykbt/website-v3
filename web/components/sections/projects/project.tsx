import React, { useEffect, useState } from "react";
import { Body1 } from "../../typography";
import { ArrowContainer, IndexContainer, Name } from "./projects-styled";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, ProjectTextHover } from "@website-v3/web/helpers/springs";

type Props = {
  index: number,
  title?: string,
};

export const Project = ({
  index,
}: Props) => {
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    console.log(isHovered);
  }, [isHovered]);

  return (
    <Link href="" passHref={true}>
      <div onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{cursor: "pointer"}}>
        <IndexContainer>
          <Body1 fontSize="12px">Ø{index}</Body1>
        </IndexContainer>

        <ProjectTextHover on={isHovered}>
          <Name>iShouldStudy</Name>
        </ProjectTextHover>

        <ArrowContainer>
          <FadeIn on={isHovered}>
            <Image
              src="/arrow.svg"
              alt="arrow"
              layout="responsive"
              width={100}
              height={100}
            />  
          </FadeIn>
        </ArrowContainer>
      </div>
    </Link>
  );
};
