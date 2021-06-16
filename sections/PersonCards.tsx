import { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import { sansSerifRegular } from '../styles/FontStyles';
import Section from '../components/lib/Section';

const StyledSection = styled(Section)`
  background-image: url('/images/backgrounds/persons-section.svg');
  background-position: center 110px;
  background-repeat: no-repeat;

  padding: 110px 0 140px;

  @media(max-width: 425px) {
    padding: 90px 0 80px;
  }
`;

const Title = styled.h2`
  ${sansSerifRegular};
  font-size: 24px;
  text-align: center;
  margin: 0 0 87px;
`;

const fromLeftToRight = keyframes`
  0% {
    transform: translateX(-5%);
  }
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(-5%);
  }
`;

const PersonCardsWrapper = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;
  list-style: none;

  overflow-x: visible;

  animation: ${fromLeftToRight} 25s ease-in-out infinite;
`;

const PersonCard = styled.li`
  flex-shrink: 0;
  width: 168px;

  background: var(--color-white);
  border-radius: 15px;
  border: 0.2px solid #E0E0E0;
  filter: var(--shadow-filter-light);

  margin-right: 40px;

  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }
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
 * Persons section component
 */
export default function PersonCards(): ReactElement {
  const persons = [
    {
      firstName: 'Пётр',
      lastName: 'Чайковский',
      photo: 'chaykovsky.png',
    },
    {
      firstName: 'Сергей',
      lastName: 'Дягилев',
      photo: 'dyagelev.png',
    },
    {
      firstName: 'Анна',
      lastName: 'Павлова',
      photo: 'pavlova.png',
    },
    {
      firstName: 'Виссарион',
      lastName: 'Белинский',
      photo: 'belinsky.png',
    },
    {
      firstName: 'Александр',
      lastName: 'Пушкин',
      photo: 'pushkin.png',
    },
    {
      firstName: 'Сергей',
      lastName: 'Довлатов',
      photo: 'dovlatov.png',
    },
    {
      firstName: 'Илья',
      lastName: 'Репин',
      photo: 'repin.png',
    },
    {
      firstName: 'Казимир',
      lastName: 'Малевич',
      photo: 'malevich.png',
    },
    {
      firstName: 'Михаил',
      lastName: 'Врубель',
      photo: 'vrubel.png',
    },
    {
      firstName: 'Анна',
      lastName: 'Ахматова',
      photo: 'ahmatova.png',
    },
    {
      firstName: 'Алексей',
      lastName: 'Балабанов',
      photo: 'balabanov.png',
    },
    {
      firstName: 'Павел',
      lastName: 'Сюзор',
      photo: 'syuzor.png',
    },
    {
      firstName: 'Карл',
      lastName: 'Росси',
      photo: 'rossi.png',
    },
    {
      firstName: 'Фёдор',
      lastName: 'Достоевский',
      photo: 'dostoevsky.png',
    },
    {
      firstName: 'Герберт',
      lastName: 'Уэлльс',
      photo: 'uelss.png',
    },
  ];

  const personCards = persons.map((person, index) => {
    return (
      <PersonCard key={index}>
        <CardImage src={`/images/persons/${person.photo}`}/>
        <CardName>{person.firstName}<br/>{person.lastName}</CardName>
      </PersonCard>
    );
  });

  return (
    <StyledSection>
      <Title>Собирай карточки<br/>с историческими персонами</Title>
      <PersonCardsWrapper>
        {personCards}
      </PersonCardsWrapper>
    </StyledSection>
  );
}
