import { ReactElement } from 'react';
import styled from 'styled-components';
import ContainerWithVerticalAlign from '../lib/ContainerWithVerticalAlign';
import NavBar from './NavBar';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 96px;
  width: 100%;

  border-bottom: 2px solid var(--color-border-gray);
  background: var(--color-white);
  z-index: 1;

  position: fixed;
  margin-top: -96px;
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
