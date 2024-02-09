import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

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
            ${props => props.theme["base-span"]};
            ${mixins.fonts.textS};
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