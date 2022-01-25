import type { NextPage } from "next";
import { Url } from "@website-v3/web/constants/types";
import Header from "@website-v3/web/components/header";
import { Body1, H1 } from "@website-v3/web/components/typography";
import { Contact } from "@website-v3/web/components/contact/contact";
import { fontSizeExtraLarge, fontSizeSmall } from "@website-v3/web/styles";
import { Container } from "@website-v3/web/components/layout";
import { Skills } from "../components/skills/skills";

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
  return (
    <>
      <Header navItems={navItems}/>
      <H1 fontSize={fontSizeExtraLarge} margin="5vh auto 0 5vw">Andy<br/>&nbsp;&nbsp;&nbsp;&nbsp;Truong</H1>
      <Body1 fontSize={fontSizeSmall} textDirection="right" margin="7.5vh 20vw">SOFTWARE<br/>ENG</Body1>
      <Skills pages={3} />
      {/* <Contact/> */}
    </>
  );
};

export default Home;
