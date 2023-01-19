import React, { useEffect, useState } from 'react'

import { explorePublications } from '../lensQueries/explorePublications'
import Image from './Image'

export default function ExplorePublications(props){

    const [publications, setPublications] = useState([])
    const [cursor, setCursor] = useState(null)

    const init = async () => {
        try{
            const request = {
                sortCriteria: "LATEST", //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
                noRandomize:true,
                sources:["5bba5781-78b5-4927-8d2f-122742817583"],
                publicationTypes: ["POST"],
                cursor:"{\"timestamp\":1,\"offset\":0}", 
                limit:24
            }
            const response = await explorePublications(request) // To get next result replace the cursor with the value of response.pageInfo.next 

            setPublications(response.data.explorePublications.items)
            setCursor(response.data.explorePublications.pageInfo.next)

        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        init()
    },[])

    const handleLoadMore = async () => {
        try {
            const request = {
                sortCriteria: "LATEST",
                noRandomize: true,
                sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
                publicationTypes: ["POST"],
                cursor: cursor,
                limit: 24
            }

            const response = await explorePublications(request);

            setPublications([...publications, ...response.data.explorePublications.items]);
            setCursor(response.data.explorePublications.pageInfo.next)
            console.log("publications", publications);
            publications.map((publication) => {
                console.log("publicationId: ", publication.id);
            });


        } catch(err) {
            console.log(err)
        }
    }

    return(
        <div>
            <h1>Explore Publications</h1>
            {publications.map((publication, index) => 
                <div key={`${publication.id}-${index}`}>
                    <Image hash={publication.metadata.media[0].original.url} alternative={publication.metadata.name} />
                </div>
            )}
            <button onClick={handleLoadMore}>Load More</button>
        </div>
    )
}