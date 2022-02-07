import React from "react";

type Props = {
  slug: string,
}

const Project = ({
  slug,
}: Props) => {
  return(
    <h1>{slug}</h1>
  );
};

export const getServerSideProps = async (context: any ) => {
  const pageSlug = context.query.slug;
  return { props: {pageSlug} };
};

export default Project;