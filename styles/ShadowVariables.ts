import { createGlobalStyle } from 'styled-components';

/**
 * CSS box shadow variables
 */
const ShadowVariables = createGlobalStyle`
  :root {
    --shadow-blue: 0 10px 20px rgba(104, 198, 223, 0.18), 0 2px 6px rgba(104, 198, 223, 0.12), 0 0 1px rgba(0, 0, 0, 0.04);
  }
`;

export default ShadowVariables;
