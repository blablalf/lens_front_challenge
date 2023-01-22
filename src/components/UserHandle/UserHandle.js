import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

import "./UserHandle.css";

const UserHandle = ({ profile }) => {

    return (
        <Link to={`/user/${profile.handle}`} className="publication-comment-username">
            <div className='user-handle-profil-infos'>
                <div className="user-handle-profile-picture-container">
                    {profile?.picture && profile.picture?.original?.url ? 
                        <Image
                            hash={profile.picture.original.url}
                            desc={profile.name}
                        />
                        : profile?.picture && profile.picture?.uri ?
                        <img
                            src={profile.picture.uri}
                            alt={profile.name}
                        />
                        :
                        <></>
                    }
                </div>
                <p className='user-handle-profil-name'>{profile?.handle}</p>
            </div>
        </Link>
    )
}

export default UserHandle;
