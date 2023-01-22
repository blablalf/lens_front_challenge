import React from 'react';
import { Link } from 'react-router-dom';

import Image from './Image';

import "./PublicationCard.css";

const PublicationCard = ({ publication, index }) => {
    return (
        <div className="publication-card" >
            <Link to={`/publication/${publication.id}`} key={`${publication.id}-${index}`}>
                <Image
                    hash={publication.metadata.media[0].original.url}
                    desc={publication.metadata.name}
                />
                <div className="publication-card-text">
                    <div className="publication-card-text-stats">
                        <p>Comments: {publication.stats.totalAmountOfComments}</p>
                        <p>Collects: {publication.stats.totalAmountOfCollects}</p>
                        <p>Mirrors: {publication.stats.totalAmountOfMirrors}</p>
                    </div>
                    <p className="publication-card-text-content">
                        {publication.metadata.content}
                    </p>
                </div>
            </Link>
        </div>
        
    );
};

export default PublicationCard;
