import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        list-style: none;
    }

    :root{
        font-size: 62.5%;
        // Colors
        --white: #fff;
        --black: #000;
        --main-color: #0B0F99;
        --secondary-color: #1016E0;

        --border-radius: 2rem;
    }

    body{
        font-size: 1.6rem;
        width: 100%;
        height: 100vh;
        position: relative;
        background-color: var(--secondary-color);
    }

    body::before{
        content: '';
        display: block;
        width: 100%;
        height: 13rem;
        background-color: var(--main-color);
        position: absolute;
        z-index: -1;
    }

    img{
        width: 100%;
    }
`;