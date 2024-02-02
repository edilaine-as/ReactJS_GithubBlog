import { styled } from "styled-components";

export const HomeContainer = styled.main`
    margin: 0 auto;
    max-width: 54rem;
`

export const ProfileContainer = styled.div`
    background-color: ${props => props.theme["base-profile"]};
    border-radius: 10px;

    display: flex;
    gap: 32px;

    width: 54rem;
    padding: 2rem 2.5rem;

`

export const ProfileContent = styled.div`

`

export const InfoProfile = styled.div`

`