import algoliasearch from "algoliasearch";
import React, { useState } from "react";
import { InstantSearch, SearchBox, Hits, Configure, RefinementList } from "react-instantsearch-dom";
import { useRecoilValue } from "recoil";
import { algoliaState } from "@website-v3/web/helpers/state/atoms";
import { AlgoliaHit, baseUrl } from "@website-v3/web/constants/types";
import { Card } from "@website-v3/web/components/card";

const Hit = ({
  hit
}: { hit: AlgoliaHit }) => {
  const type = hit._type == "project" ? "projects" : "blog";
  const url = `${baseUrl}${type}/${hit.slug}`;
  return (
    <Card
      title={hit.title}
      href={url}
      image={hit.imageUrl}
      badgeText={hit.category}
      isSmall
    />
  );
};

export const Search = () => {
  const [showHits, setShowHits] = useState<boolean>(false);

  const algolia = useRecoilValue(algoliaState);
  const algoliaClient = algoliasearch(
    algolia.app_id,
    algolia.search_key,
  );

  return (
    <InstantSearch searchClient={algoliaClient} indexName={"production"}>
      <Configure
        hitsPerPage={3}
        analytics={false}
      />

      <SearchBox
        showLoadingIndicator
        onChange={() => setShowHits(true)}
      />

      <RefinementList
        attribute={"_type"}
        defaultRefinement={["article"]}
      />

      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};