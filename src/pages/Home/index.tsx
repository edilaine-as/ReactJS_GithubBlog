import { HomeContainer, InfoProfile, ProfileContainer, ProfileContent, SearchContainer } from "./styles";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Profile {
    id: number;
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
    company: string;
    followers: number;
}

export function Home(){
    const [profile, setProfile] = useState<Profile>();

    async function fetchProfile(){
        await api.get('users/josepholiveira')
        .then(response => {
            setProfile({
                id: response.data.id,
                avatar_url: response.data.avatar_url,
                name: response.data.name,
                bio: response.data.bio,
                login: response.data.login,
                company: response.data.company,
                followers: response.data.followers,
            });
        })
    }
    
    useEffect(() => {
        fetchProfile()
    }, [])

    return (
        <HomeContainer>
            <ProfileContainer>
                <img id="profile" src={profile?.avatar_url} alt="" />
                <ProfileContent>
                    <h1>{profile?.name}</h1>
                    <p>{profile?.bio}</p>
                    <InfoProfile>
                        <div>
                            <span>{profile?.login}</span>
                        </div>
                        <div>
                            <span>{profile?.company}</span>
                        </div>
                        <div>
                            <span>{profile?.followers} seguidores</span>
                        </div>
                    </InfoProfile>
                </ProfileContent>
            </ProfileContainer>

            <SearchContainer>
                <div>
                    <h3>Publicações</h3>
                    <span>6 Publicações</span>
                </div>
                <input type="text" placeholder="Buscar conteúdo" />
            </SearchContainer>

            <Card/>
        </HomeContainer>
    )
}