import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Image from './Image'
import PublicationCard from "./PublicationCard";

import { getPost as getPublication } from '../lensQueries/getPost';
import { getPostComments as getComments } from '../lensQueries/getPostComments';

import './LensPublication.css';

function LensPublication() {
  const { id } = useParams();
  const [comments, setComments] = useState();
  const [publication, setPublication] = useState();
  const [loadingPublication, setLoadingPublication] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    const getPublicationDatas = async () => {
      try {
        const response = await getPublication(id);
        setPublication(response.data.publication);
        console.log("publication", response.data.publication);
        setLoadingPublication(false);
      } catch (err) {
        console.log(err)
      }
    }

    const getCommentsDatas = async () => {
      try {
        const response = await getComments(id);
        setComments(response.data.publications.items);
        setLoadingComments(false);
      } catch (err) {
        console.log(err)
      }
    }

    getPublicationDatas();
    getCommentsDatas();
  }, [id]);

  return (
    <div>
      {loadingPublication || loadingComments ? <h1>Loading...</h1> :
        <div>
          <PublicationCard publication={publication}/>
          {comments?.map((comment, index) => 
            <div key={`${comment.metadata.id}-${index}`}>
              <p>{comment.metadata.content}</p>
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default LensPublication;
