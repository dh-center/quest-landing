import { ReactElement, useState } from 'react';
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

  @media(max-width: 425px) {
    height: 74px;
    margin-top: -74px;
  }
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

const MobileMenuButton = styled.div<{ isOpen: boolean }>`
  display: none;

  width: 56px;
  height: 76px;

  background-color: ${ props => props.isOpen ? '#F4F8F9' : 'transparent' };
  background-image: url('/images/menu-icon.svg');
  background-position: center center;
  background-repeat: no-repeat;

  margin-left: auto;
  margin-right: -16px;

  @media(max-width: 425px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${ props => props.isOpen ? 'flex' : 'none' };
  font-size: 18px;

  flex-direction: column;

  background-color: #F4F8F9;
  border-bottom: 2px solid var(--color-border-gray);

  position: absolute;
  top: 74px;
  left: 0;
  right: 0;

  @media(min-width: 425px) {
    display: none;
  }
`;


const MobileMenuItem = styled.a`
  text-decoration: none;
  padding: 20px 0;
  text-align: center;
`;

/**
 * Header component
 */
export default function Header(): ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Wrapper>
      <ContainerWithVerticalAlign>
        <Link href='/'>
          <Logo src='/images/quest-icon.svg' alt='Логотип Que.St'/>
        </Link>
        <NavBarRight/>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(prevState => !prevState)} isOpen={isMobileMenuOpen}/>
        <MobileMenu isOpen={isMobileMenuOpen}>
          <Link href='/#about'>
            <MobileMenuItem>
              О приложении
            </MobileMenuItem>
          </Link>
          <Link href='/#download'>
            <MobileMenuItem>
              Скачать
            </MobileMenuItem>
          </Link>
          <Link href='/#partners'>
            <MobileMenuItem>
              Партнёры
            </MobileMenuItem>
          </Link>
          <Link href='/contacts'>
            <MobileMenuItem>
              Контакты
            </MobileMenuItem>
          </Link>
        </MobileMenu>
      </ContainerWithVerticalAlign>
    </Wrapper>
  );
}
