import type { NextPage } from "next";
import { Url } from "@website-v3/web/constants/types";
import Header from "@website-v3/web/components/header";
import { Body1, H1 } from "@website-v3/web/components/typography";
import { Contact } from "@website-v3/web/components/sections/contact/contact";
import { Projects } from "@website-v3/web/components/sections/projects/projects";
import { Skills } from "@website-v3/web/components/sections/skills/skills";
import { fontSizeExtraLarge, fontSizeSmall } from "@website-v3/web/styles";
import { TextTrail } from "@website-v3/web/helpers/springs";
import { useInView } from "react-intersection-observer";
import { About } from "@website-v3/web/components/sections/about/about";
import { Experience } from "@website-v3/web/components/sections/experience";

const navItems: Url[] = [
  {
    name: "Work",
    url: "mock",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Contact",
    url: "",
  }
];

const Home: NextPage = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <Header navItems={navItems}/>
      <div style={{margin: "5vh auto 0 5vw"}} ref={ref}>
        <TextTrail on={inView}>
          <H1 fontSize={fontSizeExtraLarge}>Andy</H1>
          <br />
          <H1 fontSize={fontSizeExtraLarge}>&nbsp;&nbsp;&nbsp;&nbsp;Truong</H1>
        </TextTrail>
      </div>
      <Body1 fontSize={fontSizeSmall} textDirection="right" margin="7.5vh 20vw">SOFTWARE<br/>ENG</Body1>
      <About/>
      <Experience/>
      <Skills pages={3} />
      <Projects />
      <Contact/>
    </>
  );
};

export default Home;
