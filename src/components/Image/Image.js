import React from 'react'

const IPFS_GATEWAY = 'https://ipfs.io/ipfs/'

const Image = ({ hash, desc }) => {
    console.log("hash", hash);
    const url = hash.replace('ipfs://', '').replace('https://lens.infura-ipfs.io/ipfs/', '');
    return <img src={`${IPFS_GATEWAY}${url}`} alt={`${desc}`} />
}

export default Image

//http://localhost:3000/user/immanlue.lens <- bug here
