import { HomeContainer, InfoProfile, ProfileContainer, ProfileContent } from "./styles";
import Avatar from '../../../public/images/avatar.svg';

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
        </HomeContainer>
    )
}