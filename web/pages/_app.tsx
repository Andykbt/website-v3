import React from "react";
import "@website-v3/web/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components";
import { Url } from "@website-v3/web/constants/types";

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header navItems={navItems} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
