import React from "react";
import { NextPage } from "next";
import { Container, Header } from "../../components";
import { Card } from "../../components/card";
import { Url } from "@website-v3/web/constants/types";
import { H2 } from "../../styles";

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

const Projects: NextPage = () => {
  return (
    <>
      <Header navItems={navItems}/>
      <Container size="L">
        <H2>Projects</H2>
        <Card/>
      </Container>
    </>
  );
};

export default Projects;