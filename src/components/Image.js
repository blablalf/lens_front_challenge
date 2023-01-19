import React from 'react'

const IPFS_GATEWAY = 'https://ipfs.io/ipfs/'

const Image = ({ hash, alternative }) => {
    return <img src={`${IPFS_GATEWAY}${hash.replace('ipfs://', '')}`} alt={`${alternative}`} />
}

export default Image
