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
        background: linear-gradient(270deg, #85C8F2 -1.88%, #52DDF4 100.76%);
        font-size: 2rem;
        font-family: ${({ theme }) => theme.roboto};
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: ${({ theme }) => theme.lato};
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
