import { ReactElement } from 'react';
import Section from '../components/lib/Section';
import styled from 'styled-components';
import { sansSerifBold } from '../styles/FontStyles';
import Button from '../components/lib/Button';

const StyledSection = styled(Section)`
  padding: 65px 100px 180px;

  position: relative;
`;

const Background = styled.img`
  position: absolute;
  top: 126px;
  left: 50%;
  transform: translateX(-50%);

  z-index: -1;
`;

const TextBlock = styled.div`
  display: inline-block;
  width: 410px;
`;

const Header = styled.h1`
  ${ sansSerifBold };
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 30px;
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 67.2px;
`;

const PhoneWrapperRight = styled.div`
  display: inline-block;
  margin-left: auto;
`;

/**
 *
 */
export default function Main(): ReactElement {
  return (
    <StyledSection>
      <Background src='/images/backgrounds/main-section.svg'/>
      <TextBlock>
        <Header>
          Изучай историю Санкт-Петербурга вместе с Que.St
        </Header>
        <Description>
          Интерактивные культурные маршруты по Санкт-Петербургу с игровыми элементами
        </Description>
        <Button href='https://github.com/dh-center/quest'>Скачать</Button>
      </TextBlock>
      <PhoneWrapperRight>
        <img src='/images/screenshots/quest-catalog.svg' alt='Скриншот раздела «Каталог квестов»'/>
      </PhoneWrapperRight>
    </StyledSection>
  );
}
