import { ReactElement } from 'react';
import styled from 'styled-components';
import WithChildren from '../../lib/interfaces/WithChildren';
import { sansSerifBold } from '../../styles/FontStyles';

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 360px;

  background: var(--color-blue);
  color: var(--color-white);
  cursor: pointer;
  text-decoration: none;
  border-radius: 15px;

  ${ sansSerifBold };

  box-shadow: var(--shadow-blue);

  @media(max-width: 425px) {
    width: 100%;
  }
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
