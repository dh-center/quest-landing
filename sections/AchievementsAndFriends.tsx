import { ReactElement } from 'react';
import styled from 'styled-components';
import Section from '../components/lib/Section';
import Title from '../components/lib/Title';
import Button from '../components/lib/Button';
import Container from '../components/lib/Container';
import useBreakpoint from '../lib/useBreakpoint';

const TextBlock = styled.div`
  display: inline-block;
  max-width: 496px;

  margin-top: 135px;
  margin-right: auto;

  @media(max-width: 425px) {
    margin-top: 80px;
  }
`;

const StyledTitle = styled(Title)`
  margin-bottom: 40px;
`;

const DescriptionParagraph = styled.p`
  max-width: 460px;

  margin-top: 0;
  margin-bottom: 1em;
`;

const PhoneWrapper = styled.div`
  margin-top: 135px;
  position: relative;

  @media(max-width: 425px) {
    margin-top: 0;
    margin-bottom: 30px;
    height: 431px;
  }
`;

const BlueCircle = styled.div`
  width: 416px;
  height: 416px;
  border-radius: 50%;

  background: #68C6DF;
  opacity: 0.2;

  position: absolute;
  top: 104px;
  left: 122px;

  @media(max-width: 425px) {
    width: 316px;
    height: 316px;

    top: 78px;
    left: 10px;
  }
`;

const YellowCircle = styled.div`
  width: 208px;
  height: 208px;
  border-radius: 50%;

  background: #F7E864;
  opacity: 0.2;

  position: absolute;
  top: 67px;
  left: 352px;

  @media(max-width: 425px) {
    width: 152px;
    height: 152px;

    top: 50px;
    right: 0;
    left: auto;
  }
`;

const Phone = styled.img`
  width: 269px;

  position: absolute;
  left: 196px;

  filter: var(--shadow-filter-medium);

  @media(max-width: 425px) {
    width: 202px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LeftBlock = styled.img`
  width: 260px;

  position: absolute;
  top: 105px;
  filter: var(--shadow-filter-large);

  @media(max-width: 425px) {
    width: 222px;

    top: 79px;
  }
`;

const RightBlock = styled.img`
  width: 260px;

  position: absolute;
  top: 265px;
  left: 360px;
  filter: var(--shadow-filter-large);

  @media(max-width: 425px) {
    width: 222px;

    top: 201px;
    right: 0;
    left: auto;
  }
`;

/**
 * Achievements and friend section component
 */
export default function AchievementsAndFriends(): ReactElement {
  const breakpoints = useBreakpoint();

  return (
    <Section>
      <Container>
        <TextBlock>
          <StyledTitle>
            Достижения и друзья
          </StyledTitle>
          <DescriptionParagraph>
            Гуляй по Петербургу с нашим приложением и накапливай очки опыта. Выполняя задания, можно получать достижения и открывать премиальный контент.
          </DescriptionParagraph>
          {
            breakpoints.isXs &&
            <PhoneWrapper>
              <BlueCircle/>
              <YellowCircle/>
              <Phone src='/images/screenshots/account/phone.png'/>
              <LeftBlock src='/images/screenshots/account/achievements.png'/>
              <RightBlock src='/images/screenshots/account/friends.png'/>
            </PhoneWrapper>
          }
          <DescriptionParagraph>
            Вместе веселее! Приглашай друзей в приложение, чтобы проходить квесты вместе, следить за их прогрессом и хвастаться своими ачивками.
          </DescriptionParagraph>
          <Button href='https://github.com/dh-center/quest'>Скачать</Button>
        </TextBlock>
        {
          !breakpoints.isXs &&
          <PhoneWrapper>
            <BlueCircle/>
            <YellowCircle/>
            <Phone src='/images/screenshots/account/phone.png'/>
            <LeftBlock src='/images/screenshots/account/achievements.png'/>
            <RightBlock src='/images/screenshots/account/friends.png'/>
          </PhoneWrapper>
        }
      </Container>
    </Section>
  );
}
