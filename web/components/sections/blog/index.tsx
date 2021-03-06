import React, { useEffect, useRef, useState } from "react";
import { H1, Body1 } from "@website-v3/web/styles";
import Image from "next/image";
import { BlogArticle, BlogContainer, ExcerptContainer, ImageWrapper, Titles } from "./blog-styled";
import Badge from "@website-v3/web/components/badge";
import { PortableText } from "@portabletext/react";
import Carousel from "@website-v3/web/components/carousel";
import { CarouselItem } from "@website-v3/web/components/carousel/carousel-styled";
import { ExpandBorder } from "@website-v3/web/helpers/springs";
import { baseUrl } from "@website-v3/web/constants/types";
import { showMouseState } from "@website-v3/web/helpers/state/atoms";
import { useSetRecoilState } from "recoil";

type BlogProps = {
  articles: any[],
};

export const Blog = ({
  articles
}: BlogProps) => {
  const [selected, setSelected] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => prev + 10);
      if (progress === 100) {
        setProgress(0);
        setSelected(prev => prev + 1);

        if (selected === articles.length - 1) {
          setSelected(0);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [progress]);

  const renderTitles = () => {
    return articles.map((item, index) =>
      <BlogArticle
        key={index}
        progress={progress}
        onClick={() => {
          setProgress(0);
          setSelected(index);
        }}
        selected={selected === index}
      >
        {item.title}
      </BlogArticle>
    );
  };

  const renderExcerpts = () => {
    return articles.map((item, index) =>
      <BlogCard
        key={index}
        slug={item.slug.current}
        imageUrl={item.imageUrl}
        portableText={item.excerpt}
        category={item.category}
      />
    );
  };

  return (
    <>
      <H1 textDirection="center">Blog</H1>
      <Body1 textDirection="center">A personal diary and log of things i find interesting</Body1>

      <BlogContainer>
        <Titles>
          {renderTitles()}
        </Titles>
        <Carousel index={selected}>
          {renderExcerpts()}
        </Carousel>
      </BlogContainer>
    </>
  );
};

const BlogCard = ({
  slug,
  imageUrl,
  portableText,
  category,
} : {
  slug: string,
  imageUrl: string,
  portableText: any[],
  category: string,
}) => {
  const url = `${baseUrl}blog/${slug}`;
  const [hover, setHover] = useState(false);
  const setShowMouse = useSetRecoilState(showMouseState);
  const ref = useRef(null);

  return(
    <CarouselItem 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}  
    >
      <a href={url}>
        <ExcerptContainer>
          <ExpandBorder on={hover}>
            <ImageWrapper
              ref={ref} 
              onMouseEnter={() => setShowMouse(true)}
              onMouseLeave={() => setShowMouse(false)}
            >
              <Image src={imageUrl} layout="fill" objectFit="cover"/>
            </ImageWrapper>
          </ExpandBorder>
          <div style={{marginTop: 10, overflow: "hidden"}}>
            <Badge label={category}/>
            <PortableText value={portableText}/>
          </div>
        </ExcerptContainer>
      </a>
    </CarouselItem>
  );
};