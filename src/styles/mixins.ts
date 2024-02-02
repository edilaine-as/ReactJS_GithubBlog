import { css } from "styled-components";

export const mixins = {
    fonts: {
        link: css`
            font-family: 'Nunito', sans-serif;
            line-height: 160%;
            font-size: 0.75rem;
        `,
        textS: css`
            font-family: 'Nunito', sans-serif;
            line-height: 160%;
            font-size: 0.875rem;
        `,
        textM: css`
            font-family: 'Nunito', sans-serif;
            line-height: 160%;
            font-size: 1rem;
        `,
        titleS: css`
            font-family: 'Nunito', sans-serif;
            line-height: 160%;
            font-size: 1.125rem;
        `,
        titleM: css`
            font-family: 'Nunito', sans-serif;
            line-height: 160%;
            font-size: 1.25rem;
        `,
        titleL: css`
            font-family: 'Nunito', sans-serif;
            line-height: 160%;
            font-size: 1.5rem;
        `,
    }
} as const