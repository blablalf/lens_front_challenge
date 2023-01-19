import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from './Image'

import { getPost as getPublication } from '../lensQueries/getPost';

import './LensPublication.css';

function LensPublication() {
  const { id } = useParams();
  const [publication, setPublication] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPublicationDatas = async () => {
      try {
        const post = await getPublication(id);
        setPublication(post.data.publication);
        setLoading(false);
      } catch (err) {
        console.log(err)
      }
    }

    getPublicationDatas();
  }, [id]);

  return (
    <div>
      {loading ? <h1>Loading...</h1> :
        <Image hash={publication.metadata.media[0].original.url}
        alternative={publication.metadata.name}/>
      }
    </div>
  );
}

export default LensPublication;
