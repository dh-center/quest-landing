import { ReactElement } from 'react';
import Section from '../components/lib/Section';
import styled from 'styled-components';
import Button from '../components/lib/Button';
import WithId from '../lib/interfaces/WithId';
import Title from '../components/lib/Title';

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

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 67.2px;
`;

const PhoneWrapperRight = styled.div`
  display: inline-block;
  margin-left: auto;
`;

interface MainProps extends WithId {}

/**
 * Main section component
 *
 * @param props - props of component
 */
export default function Main(props: MainProps): ReactElement {
  return (
    <StyledSection id={props.id}>
      <Background src='/images/backgrounds/main-section.svg'/>
      <TextBlock>
        <Title>
          Изучай историю Санкт-Петербурга вместе с Que.St
        </Title>
        <Description>
          Интерактивные культурные маршруты по Санкт-Петербургу с игровыми элементами
        </Description>
        <Button href='https://github.com/dh-center/quest'>Скачать</Button>
      </TextBlock>
      <PhoneWrapperRight>
        <img src='/images/screenshots/quest-catalog.png' alt='Скриншот раздела «Каталог квестов»'/>
      </PhoneWrapperRight>
    </StyledSection>
  );
}
