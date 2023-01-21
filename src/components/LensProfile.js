import React, { useEffect, useState } from "react";
import { getUserProfile } from "../lensQueries/getUserProfile";
import { getUserPosts as getPublications } from "../lensQueries/getUserPosts";
import { useParams } from "react-router-dom";
import Image from "./Image";

function LensProfile() {
    const [profile, setProfile] = useState(null);
    const [publications, setPublications] = useState(null);
    const [loadingProfile, setLoadingProfile] = useState(true);
    const [loadingPublication, setLoadingPublication] = useState(true);
    const { username } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get user profile
                const profile = await getUserProfile(username);
                setProfile(profile);
                setLoadingProfile(false);
                console.log(profile);
                // Get user publications
                const publications = await getPublications(profile.id);
                setPublications(publications.data.publications);
                setLoadingPublication(false);
                console.log(publications);
            } catch (err) {
                console.log(err);
            }
        };        

        fetchData();
    }, [profile, username]);

    if (loadingProfile || loadingPublication) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{profile.name}</h1>
            <p>{profile.bio}</p>
            <Image hash={profile?.picture?.original.url} desc={profile?.name} />
            <h2>Publications</h2>
            <ul>
                {publications.items.map((publication, index) => (
                    <li key={`${publication.metadata.id}-${index}`}>
                        <h3>{publication.metadata.name}</h3>
                        <p>{publication.metadata.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LensProfile;
