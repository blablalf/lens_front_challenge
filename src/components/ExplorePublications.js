import PostCard from "./PublicationCard";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import { explorePublications } from "../lensQueries/explorePublications";
import FilterDropdown from "./FilterDropdown";

import "./ExplorePublications.css";

const options = [
    { value: 'LATEST', label: 'Latest' },
    { value: 'TOP_COMMENTED', label: 'Top Commented' },
    { value: 'TOP_COLLECTED', label: 'Top Collected' },
    { value: 'TOP_MIRRORED', label: 'Top Mirrored' },
];

export default function ExplorePublications(props) {
    const [publications, setPublications] = useState([]);
    const [cursor, setCursor] = useState('{"timestamp":1,"offset":0}');
    const [sortCriteria, setSortCriteria] = useState("LATEST");

    const loadPublications = async () => {
        try {
            const request = {
                sortCriteria: sortCriteria, //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
                noRandomize: true,
                sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
                publicationTypes: ["POST"],
                cursor: cursor,
                limit: 24,
            };
            const response = await explorePublications(request); // To get next result replace the cursor with the value of response.pageInfo.next

            setPublications([
                ...publications,
                ...response.data.explorePublications.items,
            ]);
            setCursor(response.data.explorePublications.pageInfo.next);
            console.log("publications", publications);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setCursor('{"timestamp":1,"offset":0}');
        setPublications([]);
        loadPublications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortCriteria]); // need to fix this otherwise it will keep calling the api and add more publications

    return (
        <div className="explore-container">
            <h1 className="explore-title">Explore Publications</h1>
            <FilterDropdown className="filter-dropdown" options={options} value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)} />
            <InfiniteScroll
                loadMore={loadPublications}
                hasMore={cursor !== null}
                loader={<p className="loader">Loading...</p>}
            >
                <div className="publications-container">
                    {publications.map((publication, index) => (
                        <PostCard key={`${publication.metadata.id}-${index}`} publication={publication} />
                    ))}
                </div>
            </InfiniteScroll>
            <button className="load-more-button" onClick={loadPublications}>
                Load More
            </button>
        </div>
    );
}
