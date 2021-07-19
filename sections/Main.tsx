import { ReactElement } from 'react';
import Section from '../components/lib/Section';
import Container from '../components/lib/Container';
import styled from 'styled-components';
import Button from '../components/lib/Button';
import WithId from '../lib/interfaces/WithId';
import Title from '../components/lib/Title';

const SectionWithBackground = styled(Section)`
  background-image: url('/images/backgrounds/main-section.svg');
  background-position: center 126px;
  background-repeat: no-repeat;

  @media(max-width: 425px) {
    background-position: center 70px;
  }
`;

const TextBlock = styled.div`
  display: inline-block;
  width: 410px;

  margin-top: 65px;
  margin-left: 100px;

  @media(max-width: 425px) {
    margin-top: 30px;
    margin-left: 0;
    margin-bottom: 80px;
  }
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 50px;

  @media(max-width: 425px) {
    margin-bottom: 200px;
  }
`;

const Phone = styled.img`
  width: 270px;
  height: 570px;

  margin: 65px 95px 175px auto;

  filter: var(--shadow-filter-medium);

  @media(max-width: 425px) {
    display: none;
  }
`;

interface MainProps extends WithId {}

/**
 * Main section component
 *
 * @param props - props of component
 */
export default function Main(props: MainProps): ReactElement {
  return (
    <SectionWithBackground id={props.id}>
      <Container>
        <TextBlock>
          <Title>
            Изучай историю Санкт-Петербурга вместе с Que.St
          </Title>
          <Description>
            Интерактивные культурные маршруты по Санкт-Петербургу с игровыми элементами
          </Description>
          <Button href='#download'>Скачать</Button>
        </TextBlock>
        <Phone src='/images/screenshots/quest-catalog.png' alt='Скриншот раздела «Каталог квестов»'/>
      </Container>
    </SectionWithBackground>
  );
}
