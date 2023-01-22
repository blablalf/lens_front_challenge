import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroller";

import PublicationCard from "./PublicationCard";
import PublicationComment from './PublicationComment';

import { getPost as getPublication } from '../lensQueries/getPost';
import { getPostComments as getComments } from '../lensQueries/getPostComments';

import './LensPublication.css';
import UserHandle from './UserHandle';

function LensPublication() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [publication, setPublication] = useState();
  const [loadingPublication, setLoadingPublication] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);
  const [commentCursor, setCommentCursor] = useState(null);

  const getCommentsDatas = async () => {
    try {
      const commentsRes = await getComments(id, commentCursor);
      setComments([
        ...comments,
        ...commentsRes.data.publications.items,
      ]);
      setCommentCursor(commentsRes.data.publications.pageInfo.next);
      console.log("comment", commentsRes.data.publications.items);
      setLoadingComments(false);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const getPublicationDatas = async () => {
      try {
        const publicationRes = await getPublication(id);
        setPublication(publicationRes.data.publication);
        setLoadingPublication(false);

        getCommentsDatas();
      } catch (err) {
        console.log(err)
      }
    }

    getPublicationDatas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!loadingPublication && !loadingComments)
    return (
      <div className='lens-publication-container'>

        <div className='lens-publication-infos'>

          <div className='lens-publication-pub-card'>
            <PublicationCard publication={publication} />
          </div>

          <div className='lens-publication-text-data'>
            <UserHandle profile={publication.profile} />
            <p className='lens-publication-text-content'>
              {publication.metadata.content}
            </p>
          </div>
          
        </div>

        <div className='lens-publication-comments'>
          <h1 className="lens-publication-comments-title">Comments</h1>
          <InfiniteScroll
              loadMore={getCommentsDatas}
              hasMore={commentCursor !== null}
              loader={<p className="loader">Loading...</p>}
          >
            <div>
              {comments?.map((comment, index) =>
                <div key={`${comment.metadata.id}-${index}`}>
                  <PublicationComment comment={comment}/>
                </div>
              )}
            </div>
          </InfiniteScroll>
        </div>

      </div>
    );
}

export default LensPublication;
