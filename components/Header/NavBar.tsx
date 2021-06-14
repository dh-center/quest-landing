import { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import WithClassName from '../../lib/interfaces/WithClassName';

const Wrapper = styled.nav`
  font-size: 14px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: var(--color-black);

  cursor: pointer;

  margin-left: 40px;
`;

interface NavBarProps extends WithClassName {}

/**
 * Navigation bar component
 *
 * @param props - props of component
 */
export default function NavBar(props: NavBarProps): ReactElement {
  return (
    <Wrapper className={props.className}>
      <Link href='/#about'>
        <StyledLink>
          О приложении
        </StyledLink>
      </Link>
      <Link href='/#download'>
        <StyledLink>
          Скачать
        </StyledLink>
      </Link>
      <Link href='/#partners'>
        <StyledLink>
          Партнёры
        </StyledLink>
      </Link>
      <Link href='/contacts'>
        <StyledLink>
          Контакты
        </StyledLink>
      </Link>
    </Wrapper>
  );
}
