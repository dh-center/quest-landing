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
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  section[id] {
    margin-top: -96px;
    padding-top: 96px;
  }
`;

export default GlobalStyles;
