import { createGlobalStyle } from 'styled-components';

/**
 * CSS color variables
 */
const ColorVariables = createGlobalStyle`
  :root {
    --color-black: #55556B;
    --color-white: #FFFFFF;
    --color-blue: #68C6DF;

    --color-border-gray: #EDF3F3;
  }
`;

export default ColorVariables;
