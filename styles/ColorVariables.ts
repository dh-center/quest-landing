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

    --color-background-gray: rgba(142, 178, 188, 0.1);
  }
`;

export default ColorVariables;
