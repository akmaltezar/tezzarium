import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => (props.mainColor ? "#0F1624" : "#000000")}
    }
`