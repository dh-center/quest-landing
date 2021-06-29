import { ReactElement } from 'react';
import styled from 'styled-components';
import Section from '../components/lib/Section';
import Title from '../components/lib/Title';
import Button from '../components/lib/Button';
import Container from '../components/lib/Container';

const TextBlock = styled.div`
  display: inline-block;
  max-width: 496px;

  margin-right: auto;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 40px;
`;

const DescriptionParagraph = styled.p`
  max-width: 460px;

  margin-top: 0;
  margin-bottom: 1em;
`;

const PhoneWrapperLarge = styled.div`
  display: block;

  @media (max-width: 425px) {
    display: none;
  }
`;

const PhoneWrapperMobile = styled.div`
  display: none;

  @media (max-width: 425px) {
    display: block;
  }
`;

const PhoneWrapper = styled.div`
  position: relative;
  width: 560px;
  height: 570px;

  @media (max-width: 425px) {
    margin-bottom: 30px;
    height: 431px;
    width: 100%;
  }
`;

const BlueCircle = styled.div`
  width: 208px;
  height: 208px;
  border-radius: 50%;

  background: #68C6DF;
  opacity: 0.2;

  position: absolute;
  top: 62px;

  @media (max-width: 425px) {
    width: 158px;
    height: 158px;

    top: 47px;
  }
`;

const YellowCircle = styled.div`
  width: 416px;
  height: 416px;
  border-radius: 50%;

  background: #F7E864;
  opacity: 0.2;

  position: absolute;
  top: 104px;
  left: 22px;

  @media (max-width: 425px) {
    width: 315px;
    height: 315px;

    top: 79px;
    left: 17px;
  }
`;

const Phone = styled.img`
  width: 269px;

  position: absolute;
  left: 96px;

  filter: var(--shadow-filter-medium);

  @media (max-width: 425px) {
    width: 202px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LeftBlock = styled.img`
  width: 260px;

  position: absolute;
  top: 290px;
  filter: var(--shadow-filter-large);

  @media (max-width: 425px) {
    width: 222px;

    top: 303px;
  }
`;

const RightBlock = styled.img`
  width: 260px;

  position: absolute;
  top: 102px;
  right: 0;
  filter: var(--shadow-filter-large);

  @media (max-width: 425px) {
    width: 222px;

    top: 155px;
  }
`;

/**
 * Achievements and friend section component
 */
export default function AchievementsAndFriends(): ReactElement {
  return (
    <Section>
      <Container>
        <TextBlock>
          <StyledTitle>
            Достижения и друзья
          </StyledTitle>
          <DescriptionParagraph>
            Гуляй по Петербургу с нашим приложением и накапливай очки опыта. Выполняя задания, можно получать достижения
            и открывать премиальный контент.
          </DescriptionParagraph>
          <PhoneWrapperMobile>
            <PhoneWrapper>
              <BlueCircle/>
              <YellowCircle/>
              <Phone src='/images/screenshots/account/phone.png'/>
              <LeftBlock src='/images/screenshots/account/achievements.png'/>
              <RightBlock src='/images/screenshots/account/friends.png'/>
            </PhoneWrapper>
          </PhoneWrapperMobile>
          <DescriptionParagraph>
            Вместе веселее! Приглашай друзей в приложение, чтобы проходить квесты вместе, следить за их прогрессом и
            хвастаться своими ачивками.
          </DescriptionParagraph>
          <Button href='https://github.com/dh-center/quest'>Скачать</Button>
        </TextBlock>
        <PhoneWrapperLarge>
          <PhoneWrapper>
            <BlueCircle/>
            <YellowCircle/>
            <Phone src='/images/screenshots/account/phone.png'/>
            <LeftBlock src='/images/screenshots/account/achievements.png'/>
            <RightBlock src='/images/screenshots/account/friends.png'/>
          </PhoneWrapper>
        </PhoneWrapperLarge>
      </Container>
    </Section>
  );
}
