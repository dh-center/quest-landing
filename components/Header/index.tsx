import { ReactElement } from 'react';
import styled from 'styled-components';
import ContainerWithVerticalAlign from '../lib/ContainerWithVerticalAlign';
import Image from 'next/image';
import NavBar from './NavBar';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 96px;
  width: 100%;

  border-bottom: 2px solid var(--color-border-gray);

  position: fixed;
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
        <Image src='/images/quest-icon.svg' alt='Que.St logo' width='100' height='56'/>
        <NavBarRight/>
      </ContainerWithVerticalAlign>
    </Wrapper>
  );
}
