import { styled } from "styled-components";
import { mixins } from "../../styles/mixins";

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

    h1{
        ${mixins.fonts.titleL};
        margin-bottom: 0.5rem;
    }

    p{
        margin-bottom: 1.5rem;
    }
`

export const InfoProfile = styled.div`
    color: ${props => props.theme["base-subtitle"]};

    display: flex;
    gap: 24px;
`

export const SearchContainer = styled.div`
    margin-top: 4.5rem;
    margin-bottom: 3rem;

    > div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.75rem;

        h3{
            ${mixins.fonts.titleS};
        }

        span{
            ${mixins.fonts.textS};
            ${props => props.theme["base-span"]};
        }
    }

    input{
        background-color: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-text"]};
        border: 1px solid ${props => props.theme["base-border"]};
        border-radius: 6px;

        width: 100%;
        padding: 12px;

        &:focus-within {
            outline: 1px solid ${props => props.theme.blue};
        }

        &::placeholder{
            color: ${props => props.theme["base-label"]};
        }
    }

`