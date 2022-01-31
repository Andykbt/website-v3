import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FadeIn, SwapColour } from "../../../helpers/springs";
import { Body1, H2 } from "../../typography";
import {
  Center,
  StarsBG,
  TableHeader,
  TableItems,
  TableBody
} from "./experience-styled";

export const Experience = () => {
  const items = [
    {
      title: "some title",
      content: "retre qterqwe 0000",
    },
    {
      title: "some title",
      content: "retre qterqwe 1111",
    },
    {
      title: "some title",
      content: "retre qterqwe 2222",
    },
  ];
  
  const [ref, inView] = useInView({
    threshold: 1,
  });
  const [selected, setSelected] = useState(0);
  const [content, setContent] = useState<String>(items[0].content);

  const renderItems = () => {
    return items.map((item, index) => (
      <Body1 
        key={index}
        onClick={
          () => {
            setSelected(index);
            setContent(item.content);
          }
        }
        style={{
          cursor: "pointer",
          padding: "0 15px"
        }}>
        <SwapColour on={selected === index}>
          {item.title}
        </SwapColour>
      </Body1>

    ));
  };

  function renderContent( cardText: any ) {
    return <FadeIn key={cardText}>{cardText}</FadeIn>;
  }

  return (
    <StarsBG>
      <Center>
        <TableHeader>
          <H2>Experience</H2>
        </TableHeader>

        <TableBody
          ref={ref}
          show={inView}
        >
          <TableItems>
            {renderItems()}
          </TableItems>
          
          <div style={{ padding: "0 25px" }}>
            {renderContent(content)}
          </div>
        </TableBody>
      </Center>
    </StarsBG>
  );
};
