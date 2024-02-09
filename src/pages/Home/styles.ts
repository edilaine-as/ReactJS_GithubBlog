import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HomeContainer = styled.main`
    margin: 0 auto;
    margin-bottom: 12rem;
    max-width: 54rem;
`

export const ProfileContainer = styled.div`
    background-color: ${props => props.theme["base-profile"]};
    border-radius: 10px;

    display: flex;
    gap: 32px;

    width: 54rem;
    padding: 2rem 2.5rem;

    img#profile{
        height: 9.25rem;
        width: 9.25rem;
        border-radius: 8px;
    }

`

export const ProfileContent = styled.div`
    p{
        margin-bottom: 1.5rem;
    }
`

export const HeaderProfile = styled.div`
    display: flex;
    justify-content: space-between;

    h1{
        ${mixins.fonts.titleL};
        margin-bottom: 0.5rem;
    }

    a{
        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme.blue};
        ${mixins.fonts.link};
    }
`

export const InfoProfile = styled.div`
    color: ${props => props.theme["base-subtitle"]};

    display: flex;
    gap: 24px;
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
`