import { styled } from "styled-components";
import { mixins } from "../../styles/mixins";

export const IssuesContainer = styled.main`
    margin: 0 auto;
    margin-bottom: 12rem;
    max-width: 54rem;
`

export const PostContainer = styled.div`
    background-color: ${props => props.theme["base-profile"]};
    border-radius: 10px;

    width: 54rem;
    padding: 2rem 2.5rem;
    margin-bottom: 2.5rem;

    h2{
        margin: 20px 0px 8px 0px;
    }
`

export const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;

    a{
        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme.blue};
        ${mixins.fonts.link};

        display: flex;
        gap: 8px;
        align-items: center;
    }
`

export const InfoPost = styled.div`
    display: flex;
    gap: 32px;

    div{
        display: flex;
        gap: 8px;
        align-items: center;

        svg{
            color: ${props => props.theme["base-label"]};
        }
    }
`