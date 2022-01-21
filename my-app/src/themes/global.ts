import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
        
    }

    :root{
        --black-700:#000000;
        --white:#FFFF;
        --gray-500:#868686;

        --green-500:#4F9419;
        --green-700:#006C18;
    }

`;


export default GlobalStyles
