import { Card } from '@website-v3/web/src/components/card';
import { AlgoliaHit, baseUrl } from '@website-v3/web/src/constants/types';
import { algoliaState } from '@website-v3/web/src/helpers/state/atoms';
import algoliasearch from 'algoliasearch';
import React from 'react';
import {
    Configure,
    Hits,
    InstantSearch,
    RefinementList,
    SearchBox,
} from 'react-instantsearch-dom';
import { useRecoilValue } from 'recoil';

const Hit = ({ hit }: { hit: AlgoliaHit }) => {
    const type = hit._type == 'project' ? 'projects' : 'blog';
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
    const algolia = useRecoilValue(algoliaState);
    const algoliaClient = algoliasearch(algolia.app_id, algolia.search_key);

    return (
        <InstantSearch searchClient={algoliaClient} indexName={'production'}>
            <Configure hitsPerPage={9} analytics={false} />

            <SearchBox showLoadingIndicator />

            <RefinementList
                attribute={'_type'}
                defaultRefinement={['article']}
            />

            <Hits hitComponent={Hit} />
        </InstantSearch>
    );
};
