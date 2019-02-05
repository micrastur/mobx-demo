import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        background: #e2e2e2;
        color: #424242;
        font: 16px Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        height: 100vh;
    }

    #todo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: inherit;
    }
`
