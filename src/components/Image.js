import React from 'react'

const IPFS_GATEWAY = 'https://ipfs.io/ipfs/'

const Image = ({ hash, desc }) => {
    return <img src={`${IPFS_GATEWAY}${hash.replace('ipfs://', '')}`} alt={`${desc}`} />
}

export default Image
