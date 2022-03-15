import algoliasearch from "algoliasearch";
import React, { useRef, useState } from "react";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import { useRecoilValue } from "recoil";
import { algoliaState, featuredContentState } from "../../helpers/state/atoms";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch-hooks";

export const Search = () => {
  // const { query, refine, isSearchStalled } = useSearchBox(props);
  // const [inputValue, setInputValue] = useState(query);
  // const inputRef = useRef<HTMLInputElement>(null);

  const algolia = useRecoilValue(algoliaState);
  console.log(algolia);

  // const algoliaClient = algoliasearch(
  //   "0YB6Z9PBS6",
  //   "70dcc1a3162ccf33a9e535c5fd960ce4",
  // );

  return (
    <>
      {/* <InstantSearch searchClient={algoliaClient} indexName={"production"}>
        <SearchBox />
        <Hits />
      </InstantSearch> */}
    </>
  );
};