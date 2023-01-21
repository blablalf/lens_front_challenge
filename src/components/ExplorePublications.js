import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import { explorePublications } from "../lensQueries/explorePublications";
import Select from 'react-select';
import { Link } from 'react-router-dom'

import Image from "./Image";

import "./ExplorePublications.css";

const options = [
    { value: 'LATEST', label: 'Latest' },
    { value: 'TOP_COMMENTED', label: 'Top Commented' },
    { value: 'TOP_COLLECTED', label: 'Top Collected' },
    { value: 'TOP_MIRRORED', label: 'Top Mirrored' },
];

export default function ExplorePublications(props) {
    const [publications, setPublications] = useState([]);
    const [cursor, setCursor] = useState(null);
    const [sortCriteria, setSortCriteria] = useState("LATEST");

    const init = async () => {
        try {
            const request = {
                sortCriteria: sortCriteria, //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
                noRandomize: true,
                sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
                publicationTypes: ["POST"],
                cursor: '{"timestamp":1,"offset":0}',
                limit: 24,
            };
            const response = await explorePublications(request); // To get next result replace the cursor with the value of response.pageInfo.next

            setPublications(response.data.explorePublications.items);
            setCursor(response.data.explorePublications.pageInfo.next);
            console.log("publications", publications);
        } catch (err) {
            console.log(err);
        }
    };

    const handleLoadMore = async () => {
        try {
            const request = {
                sortCriteria: sortCriteria,
                noRandomize: true,
                sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
                publicationTypes: ["POST"],
                cursor: cursor,
                limit: 24,
            };

            const response = await explorePublications(request);

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
        init();
    }, []); // need to fix this otherwise it will keep calling the api and add more publications

    return (
        <div className="explore-container">
            <h1 className="explore-title">Explore Publications</h1>
            <div className="filter-dropdown">
                <label htmlFor="sortCriteria">Sort by:</label>
                <select className="filter-select" id="sortCriteria" value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                    <option value="LATEST">Latest</option>
                    <option value="TOP_COMMENTED">Top Commented</option>
                    <option value="TOP_COLLECTED">Top Collected</option>
                    <option value="TOP_MIRRORED">Top Mirrored</option>
                </select>
            </div>
            <InfiniteScroll
                loadMore={handleLoadMore}
                hasMore={cursor !== null}
                loader={<p className="loader">Loading...</p>}
            >
                <div className="publications-container">
                    {publications.map((publication, index) => (
                        <div
                            className="publication-card"
                            key={`${publication.id}-${index}`}
                        >
                            <Image
                                className="publication-image"
                                hash={publication.metadata.media[0].original.url}
                                desc={publication.metadata.name}
                            />
                            <div className="publication-text">
                                <Link to={`/user/${publication.profile.handle}`} className="publication-text-author">
                                    {publication.profile.handle}
                                </Link>
                                <p className="publication-text-content">
                                    {publication.metadata.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
            <button className="load-more-button" onClick={handleLoadMore}>
                Load More
            </button>
        </div>
    );
}
