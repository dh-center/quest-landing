import { createGlobalStyle } from 'styled-components';
import { sansSerifRegular } from './FontStyles';

/**
 * Global CSS styles for application
 */
const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    ${ sansSerifRegular };
    color: var(--color-black);
    font-size: 24px;
    line-height: 1.2;

    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;

    @media(max-width: 425px) {
      font-size: 22px;
    }
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
