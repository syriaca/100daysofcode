import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle` 
    ${normalize}

    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

    * {
    box-sizing: border-box;
    }

    body {
        font-family: 'Muli', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }
`;

export default GlobalStyle;