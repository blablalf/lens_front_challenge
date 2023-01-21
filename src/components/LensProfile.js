import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroller";

import { getUserPosts as getPublications } from "../lensQueries/getUserPosts";
import { getUserProfile } from "../lensQueries/getUserProfile";
import Image from "./Image";
import PublicationCard from "./PublicationCard";

import './LensProfile.css';

function LensProfile() {
    const [profile, setProfile] = useState(null);
    const [publications, setPublications] = useState([]);
    const [loadingProfile, setLoadingProfile] = useState(true);
    const [loadingPublication, setLoadingPublication] = useState(true);
    const [cursor, setCursor] = useState(null);
    const { username } = useParams();

    const loadPublications = async () => {
        try {
            // Get user profile
            const profileRes = await getUserProfile(username);
            setProfile(profileRes);
            setLoadingProfile(false);
            // Get user publications
            const publicationsRes = await getPublications(profileRes.id, cursor);
            console.log(publicationsRes);
            setPublications([
                ...publications,
                ...publicationsRes.data.publications.items,
            ]);
            setCursor(publicationsRes.data.publications.pageInfo.next);
            setLoadingPublication(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadPublications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username]);

    if (!loadingProfile && !loadingPublication) {
        return (
            <div>
                <h1 className="profile-title">@{profile.handle}</h1>
                <div className="profile-infos-container">
                    <div className="profile-picture-container">
                        <Image className="profile-picture" hash={profile?.picture?.original.url} desc={profile?.name} />
                    </div>
                    <div className="profile-infos">
                        <div className="profile-desc">
                            <p>{profile?.name}</p>
                            <p>{profile?.bio}</p>
                        </div>
                        <div className="profile-infos-text">
                            <div className="profile-stats-container">
                                <p className="profile-infos-title">Stats:</p>
                                <div className="profile-stats">
                                    <p>Following: {profile.stats.totalFollowing}</p>
                                    <div className="profile-stats-followers-container">
                                        <p>Followers:</p>
                                        <a href={`https://polygonscan.com/address/${profile.followNftAddress}`}>
                                            {profile.stats.totalFollowers}
                                        </a>
                                    </div>
                                    <p>Comments: {profile.stats.totalComments}</p>
                                    <p>Posts: {profile.stats.totalPosts}</p>
                                    <p>Publications: {profile.stats.totalPublications}</p>
                                    <p>Mirrors: {profile.stats.totalMirrors}</p>
                                </div>
                            </div>
                            <div className="profile-id-container">
                                <p className="profile-infos-title">Id:</p>
                                <p>Lens profile: {profile.handle}</p>
                                <div className="profile-wallet-address-container-desktop">
                                    <p>Wallet address:</p>
                                    <a href={`https://polygonscan.com/address/${profile.ownedBy}`}>
                                        {profile.ownedBy}
                                    </a>
                                </div>
                                <div className="profile-wallet-address-container-mobile">
                                    <p>Wallet address:</p>
                                    <a href={`https://polygonscan.com/address/${profile.ownedBy}`}>
                                        {profile.ownedBy.slice(0, 6) + "..." + profile.ownedBy.slice(-4)}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <h2 className="publications-title">Publications</h2>
                <div className="publications-container">
                    <InfiniteScroll
                        loadMore={loadPublications}
                        hasMore={cursor !== null}
                        loader={<p className="loader">Loading...</p>}
                    >
                        <div className="publications-container">
                            {publications.map((publication, index) => (
                                <PublicationCard
                                    key={`${publication.metadata.id}-${index}`} publication={publication}
                                />
                            ))}
                        </div>
                    </InfiniteScroll>
                    <button className="load-more-button" onClick={loadPublications}>
                        Load More
                    </button>
                </div>
            </div>
        );
    }
}

export default LensProfile;
