import { ReactElement } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Link from 'next/link';
import Container from '../lib/Container';

const Wrapper = styled.header`
  height: 96px;
  width: inherit;

  border-bottom: 2px solid var(--color-border-gray);
  background: var(--color-white);
  z-index: 1;

  position: fixed;
  margin-top: -96px;
`;

const ContainerWithVerticalAlign = styled(Container)`
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 56px;
  cursor: pointer;
`;

const NavBarRight = styled(NavBar)`
  margin-left: auto;

  @media(max-width: 425px) {
    display: none;
  }
`;

/**
 * Header component
 */
export default function Header(): ReactElement {
  return (
    <Wrapper>
      <ContainerWithVerticalAlign>
        <Link href='/'>
          <Logo src='/images/quest-icon.svg' alt='Логотип Que.St'/>
        </Link>
        <NavBarRight/>
      </ContainerWithVerticalAlign>
    </Wrapper>
  );
}
