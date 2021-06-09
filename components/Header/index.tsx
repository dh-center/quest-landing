import { ReactElement } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  height: 96px;
  background: red;
`;

/**
 *
 * @class
 */
export default function Header(): ReactElement {
  return (
    <Wrapper>Header</Wrapper>
  );
}
