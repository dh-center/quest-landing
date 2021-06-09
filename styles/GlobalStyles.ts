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

    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
