import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    img {
    max-width: 100%;
    }

    ul,
    ol {
    list-style-type: none;
    }

    a {
    display: inline-block;
    text-decoration: none;
    color: black;
    }

    h1:first-letter,
    h2:first-letter,
    h3::first-letter,
    p:first-letter {
    text-transform: uppercase;
    }

    
`;
