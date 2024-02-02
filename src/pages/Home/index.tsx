import { HomeContainer, InfoProfile, ProfileContainer, ProfileContent, SearchContainer } from "./styles";
import Avatar from '../../../public/images/avatar.svg';
import { Card } from "../../components/Card";

export function Home(){
    return (
        <HomeContainer>
            <ProfileContainer>
                <img src={Avatar} alt="" />
                <ProfileContent>
                    <h1>Cameron Williamson</h1>
                    <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                    <InfoProfile>
                        <div>
                            <span>cameronwll</span>
                        </div>
                        <div>
                            <span>Rocketseat</span>
                        </div>
                        <div>
                            <span>32 seguidores</span>
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