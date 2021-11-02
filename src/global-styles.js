import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        color: #181819;
        /* background-color: #F8F8FA; */
    }
    p, h1, h2, h3, h4, h5, h6 {
        margin: 0px;
    }

    @media(max-width: 800px) {
        h1 {font-size: 24px!important;}
        p {font-size: 12px!important;}
    }
`;
