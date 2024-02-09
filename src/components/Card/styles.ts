import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CardContainer = styled.div`
    background: ${props => props.theme["base-post"]};
    border-radius: 10px;

    width: 26rem;
    height: 16.25rem;
    padding: 2rem;

    div{
        display: flex;
        justify-content: space-between;
        align-items: top;
        margin-bottom: 1.25rem;

        h2{
            ${props => props.theme["base-title"]};
            ${mixins.fonts.titleM};
            width: 17.7rem;
        }

        span{
            ${props => props.theme["base-span"]};
            ${mixins.fonts.textS};
            width: 53px;
        }
    }

    > p{
        ${props => props.theme["base-text"]};

        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    &:hover{
        border: 2px solid ${props => props.theme["base-label"]};
    }
`