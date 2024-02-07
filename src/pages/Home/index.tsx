import { CardContainer, HeaderProfile, HomeContainer, InfoProfile, ProfileContainer, ProfileContent, SearchContainer } from "./styles";
import { Card } from "../../components/Card";
import { useContext, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { IssuesContext } from "../../contexts/IssuesContext";

interface Profile {
    id: number;
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
    company: string;
    followers: number;
    html_url: string;
}

interface Card {
    id: number;
    title: string;
    body: string;
    created_at: string;
}

export function Home(){
    const [profile, setProfile] = useState<Profile>();
    const {issues, totalPosts} = useContext(IssuesContext)
    
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
                html_url: response.data.html_url,
            });
        })
    }
    
    useEffect(() => {
        fetchProfile();

    }, [])

    return (
        <HomeContainer>
            <ProfileContainer>
                <img id="profile" src={profile?.avatar_url} alt="" />
                <ProfileContent>
                    <HeaderProfile>
                        <h1>{profile?.name}</h1>
                        <Link to={profile?.html_url ?? '/'} target="_blank">GITHUB</Link>
                    </HeaderProfile>

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
                    <span>{totalPosts} Publicações</span>
                </div>
                <input type="text" placeholder="Buscar conteúdo" />
            </SearchContainer>

            <CardContainer>
                {issues.map((issue) => (
                    <Card key={issue.id} issue={issue}/>
                ))}
            </CardContainer>
        </HomeContainer>
    )
}