import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FadeIn } from "@website-v3/web/helpers/springs";
import { A, H2, H3 } from "@website-v3/web/styles/typography";
import {
  Center,
  StarsBG,
  TableHeader,
  TableItems,
  TableBody,
  Button,
  Slider,
  TableContent,
  TableItemsWrapper
} from "./experience-styled";
import { ExperienceType } from "@website-v3/web/constants/types";
import { PortableText } from "@portabletext/react";
import { colourCyan } from "@website-v3/web/styles";
import { formateDate } from "@website-v3/web/helpers/sanity";

type Props = {
  experiences: ExperienceType[],
}

export const Experience = ({
  experiences
}: Props) => {
  const [ref, inView] = useInView({ threshold: 1 });
  const [selected, setSelected] = useState(0);
  const [slider, setSlider] = useState(0);

  const renderItems = () => {
    return experiences.map((item, index) => (
      <Button 
        key={index}
        onClick={() => {
          setSelected(index);
          setSlider(48 * index);
        }}
        style={{color: selected === index ? colourCyan : ""}}
      >
        {item.company}
      </Button>
    ));
  };

  const renderBody = (key: string) => {
    return (
      <FadeIn key={key}>
        <H3>{experiences[selected].role} 
          <A
            color={colourCyan}
            href={experiences[selected].companyLink}
          >
            &nbsp;@ {experiences[selected].company}
          </A>
        </H3>

        <sub>
          {formateDate(experiences[selected].dateStarted)}
          {" - "} 
          {formateDate(experiences[selected].dateFinished)}
        </sub>

        <PortableText
          value={experiences[selected].body}
        />
      </FadeIn>
    );
  };

  return (
    <StarsBG>
      <Center>
        <TableHeader>
          <H2 fontSize="5vw" textDirection="center">Experience</H2>
        </TableHeader>

        <TableBody
          ref={ref}
          show={inView}
        >
          <TableItemsWrapper>
            <TableItems>
              <Slider height={slider}/>
              {renderItems()}
            </TableItems>
          </TableItemsWrapper>
          
          <TableContent>
            {renderBody(experiences[selected]._id)}
          </TableContent>
        </TableBody>
      </Center>
    </StarsBG>
  );
};
