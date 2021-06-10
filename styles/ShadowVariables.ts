import { createGlobalStyle } from 'styled-components';

/**
 * CSS box shadow variables
 */
const ShadowVariables = createGlobalStyle`
  :root {
    --shadow-blue: 0 10px 20px rgba(104, 198, 223, 0.18), 0 2px 6px rgba(104, 198, 223, 0.12), 0 0 1px rgba(0, 0, 0, 0.04);

    --shadow-filter-light: drop-shadow(0 16px 24px rgba(65, 67, 102, 0.08)) drop-shadow(0 2px 6px rgba(65, 67, 102, 0.07)) drop-shadow(0 0 1px rgba(65, 67, 102, 0.07));
  }
`;

export default ShadowVariables;
