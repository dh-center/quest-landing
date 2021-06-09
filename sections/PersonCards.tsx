import { ReactElement } from 'react';
import styled from 'styled-components';
import { sansSerifRegular } from '../styles/FontStyles';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 1160px;
  height: 593px;

  background-image: url('/images/backgrounds/persons-section.svg');
  background-position: center 0;
`;

const Title = styled.h2`
  ${sansSerifRegular};
  font-size: 24px;
  text-align: center;
  margin: 0 0 87px;
`;

const PersonCardsWrapper = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;
  list-style: none;
`;

const PersonCard = styled.li`
  width: 168px;

  background: var(--color-white);
  border-radius: 15px;
  border: 0.2px solid #E0E0E0;

  margin-right: 40px;

  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 224px;
`;

const CardName = styled.div`
  padding: 10px 0 14px;

  font-size: 18px;
  text-align: center;
`;

/**
 *
 */
export default function PersonCards(): ReactElement {
  const persons = [
    {
      firstName: 'Пётр',
      lastName: 'Чайковский',
    },
    {
      firstName: 'Сергей',
      lastName: 'Дягилев',
    },
    {
      firstName: 'Анна',
      lastName: 'Павлова',
    },
    {
      firstName: 'Виссарион',
      lastName: 'Белинский',
    },
    {
      firstName: 'Александр',
      lastName: 'Пушкин',
    },
    {
      firstName: 'Сергей',
      lastName: 'Довлатов',
    },
    {
      firstName: 'Илья',
      lastName: 'Репин',
    },
    {
      firstName: 'Казимир',
      lastName: 'Малевич',
    },
    {
      firstName: 'Михаил',
      lastName: 'Врубель',
    },
    {
      firstName: 'Анна',
      lastName: 'Ахматова',
    },
    {
      firstName: 'Алексей',
      lastName: 'Балабанов',
    },
    {
      firstName: 'Павел',
      lastName: 'Сюзор',
    },
    {
      firstName: 'Карл',
      lastName: 'Росси',
    },
    {
      firstName: 'Фёдор',
      lastName: 'Достоевский',
    },
    {
      firstName: 'Герберт',
      lastName: 'Уэлльс',
    },
  ];

  const personCards = persons.map((person, index) => {
    return (
      <PersonCard key={index}>
        <CardImage/>
        <CardName>{person.firstName}<br/>{person.lastName}</CardName>
      </PersonCard>
    );
  });

  return (
    <Wrapper>
      <Title>Собирай карточки<br/>с историческими персонами</Title>
      <PersonCardsWrapper>
        {personCards}
      </PersonCardsWrapper>
    </Wrapper>
  );
}
