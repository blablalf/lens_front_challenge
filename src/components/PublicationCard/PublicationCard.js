import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../Image/Image';

import "./PublicationCard.css";

const PublicationCard = ({ publication }) => {
    return (
        <div className="publication-card" >
            <Link to={`/publication/${publication.id}`}>
                <Image
                    hash={publication.metadata.media[0].original.url}
                    desc={publication.metadata.name}
                />
                <div className="publication-card-text">
                    <div className="publication-card-text-stats">
                        <p key='1' id="publication-card-text-comments">Comments: {publication.stats.totalAmountOfComments}</p>
                        <p key='2' id='publication-card-text-collects'>Collects: {publication.stats.totalAmountOfCollects}</p>
                        <p key='3' id='publication-card-text-mirrors'>Mirrors: {publication.stats.totalAmountOfMirrors}</p>
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
