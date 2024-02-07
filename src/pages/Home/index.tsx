import { CardContainer, HomeContainer, InfoProfile, ProfileContainer, ProfileContent, SearchContainer } from "./styles";
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

interface Card {
    id: number;
    title: string;
    body: string;
    created_at: string;
}

export function Home(){
    const [profile, setProfile] = useState<Profile>();
    const [cards, setCards] = useState<Card[]>([]);
    const [totalPosts, setTotalPosts] = useState(0);
    
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
    
    async function fetchIssuesRepository(){
        await api.get('search/issues', {
            params: {
                q: 'repo:daltonmenezes/test'
            }
        })
        .then(response => {
            setTotalPosts(response.data.total_count);

            const newCards = response.data.items.map((itemResponse: Card) => ({
                id: itemResponse.id,
                title: itemResponse.title,
                body: itemResponse.body,
                created_at: itemResponse.created_at,
            }));

            setCards(newCards);
              
        })
    }
    
    useEffect(() => {
        fetchProfile();
        fetchIssuesRepository();

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
                    <span>{totalPosts} Publicações</span>
                </div>
                <input type="text" placeholder="Buscar conteúdo" />
            </SearchContainer>

            <CardContainer>
                {cards.map((card) => (
                    <Card key={card.id} post={card}/>
                ))}
            </CardContainer>
        </HomeContainer>
    )
}