import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 10px;
        overflow-x: hidden;
        line-height: 1.5;
        
    }

    body {
        background: ${({ theme }) =>
          ` linear-gradient(270deg, ${theme.backgroundDark} -1.88%, ${theme.backgroundLight} 100.76%)`};
        font-size: 2rem;
        font-family: ${({ theme }) => theme.roboto};
        color: ${({ theme }) => theme.black};
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: ${({ theme }) => theme.lato};
        color: ${({ theme }) => theme.black};
    }

    a {
        color: ${({ theme }) => theme.black};
    }

    /* Scrollbar Styles */
    body::-webkit-scrollbar {
        width: 12px;
    }
    html {
        scrollbar-width: thin;
        scrollbar-color: #3F3D56 #fff;
    }
    body::-webkit-scrollbar-track {
        background: #fff;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #3F3D56 ;
        border-radius: 6px;
        border: 3px solid #fff;
    }
`;

export default GlobalStyles;
