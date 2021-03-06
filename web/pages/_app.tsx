import React from "react";
import "@website-v3/web/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@website-v3/web/components";
import { Url } from "@website-v3/web/constants/types";
import { RecoilRoot } from "recoil";
import { Progress } from "@website-v3/web/components/progress";

const navItems: Url[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Work",
    url: "/projects",
  },
  // {
  //   name: "Blog",
  //   url: "/blog",
  // },
  {
    name: "Resume",
    url: "/resume"
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

function MyApp({ Component, pageProps }: AppProps) {  
  return (
    <RecoilRoot>
      <Progress />
      <Header navItems={navItems} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
