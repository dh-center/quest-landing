import { ReactElement } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
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
`;

const NavBarRight = styled(NavBar)`
  margin-left: auto;
`;

/**
 * Header component
 */
export default function Header(): ReactElement {
  return (
    <Wrapper>
      <ContainerWithVerticalAlign>
        <Logo src='/images/quest-icon.svg' alt='Логотип Que.St'/>
        <NavBarRight/>
      </ContainerWithVerticalAlign>
    </Wrapper>
  );
}
