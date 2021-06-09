import { ReactElement } from 'react';
import styled from 'styled-components';
import WithChildren from '../../lib/interfaces/WithChildren';
import { sansSerifBold } from '../../styles/FontStyles';

const Wrapper = styled.a`
  display: inline-block;

  background: var(--color-blue);
  color: var(--color-white);
  cursor: pointer;
  text-decoration: none;
  border-radius: 15px;

  padding: 16.8px 135px;
  ${ sansSerifBold };

  box-shadow: var(--shadow-blue);
`;

interface ButtonProps extends WithChildren {
  href?: string;
}

/**
 * Blue button component
 *
 * @param props - props of component
 */
export default function Button(props: ButtonProps): ReactElement {
  return (
    <Wrapper href={props.href} target='_blank'>
      { props.children }
    </Wrapper>
  );
}
