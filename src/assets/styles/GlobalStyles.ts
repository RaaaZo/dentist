import LatoTtf from 'assets/fonts/lato-v17-latin-ext-700.eot';
import LatoWoff from 'assets/fonts/lato-v17-latin-ext-700.ttf';
import LatoEot from 'assets/fonts/lato-v17-latin-ext-700.woff';
import LatoWoff2 from 'assets/fonts/lato-v17-latin-ext-700.woff2';
import RobotoBoldEot from 'assets/fonts/roboto-v27-latin-ext-700.eot';
import RobotoBoldTtf from 'assets/fonts/roboto-v27-latin-ext-700.ttf';
import RobotoBoldWoff from 'assets/fonts/roboto-v27-latin-ext-700.woff';
import RobotoBoldWoff2 from 'assets/fonts/roboto-v27-latin-ext-700.woff2';
import RobotoEot from 'assets/fonts/roboto-v27-latin-ext-regular.eot';
import RobotoTtf from 'assets/fonts/roboto-v27-latin-ext-regular.ttf';
import RobotoWoff from 'assets/fonts/roboto-v27-latin-ext-regular.woff';
import RobotoWoff2 from 'assets/fonts/roboto-v27-latin-ext-regular.woff2';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${RobotoWoff2}); 
    src: local(''),
        url(${RobotoEot}) format('embedded-opentype'), 
        url(${RobotoWoff2}) format('woff2'), 
        url(${RobotoWoff}) format('woff'), 
        url(${RobotoTtf}) format('truetype'), 
    }

    @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${RobotoBoldWoff2}); 
    src: local(''),
        url(${RobotoBoldEot}) format('embedded-opentype'), 
        url(${RobotoBoldWoff2}) format('woff2'), 
        url(${RobotoBoldWoff}) format('woff'), 
        url(${RobotoBoldTtf}) format('truetype'), 
    }

    @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${LatoWoff2}); 
        src: local(''),
        url(${LatoEot}) format('embedded-opentype'), 
        url(${LatoWoff2}) format('woff2'), 
        url(${LatoWoff}) format('woff'), 
        url(${LatoTtf}) format('truetype'), 
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 10px;
        overflow-x: hidden;
        line-height: 1.5;
        background: ${({ theme }) =>
          ` linear-gradient(270deg, ${theme.backgroundDark} -1.88%, ${theme.backgroundLight} 100.76%)`};
    }

    body {
        
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
