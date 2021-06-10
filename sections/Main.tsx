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
`;

const TextBlock = styled.div`
  display: inline-block;
  width: 410px;

  margin-top: 65px;
  margin-left: 100px;
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 50px;
`;

const Phone = styled.img`
  margin-top: 65px;
  margin-left: auto;
  margin-bottom: 100px;
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
          <Button href='https://github.com/dh-center/quest'>Скачать</Button>
        </TextBlock>
        <Phone src='/images/screenshots/quest-catalog.png' alt='Скриншот раздела «Каталог квестов»'/>
      </Container>
    </SectionWithBackground>
  );
}
