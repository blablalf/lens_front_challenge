import React from 'react';
import UserHandle from '../UserHandle/UserHandle';

import "./PublicationComment.css";

const PublicationComment = ({ comment }) => {
    return (
        <div className="publication-comment-container">
            <UserHandle profile={comment.profile}/>
            <p className="publication-comment-text">{comment.metadata.content}</p>
        </div>
    );
};

export default PublicationComment;
