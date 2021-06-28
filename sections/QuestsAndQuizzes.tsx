import { ReactElement } from 'react';
import styled from 'styled-components';
import Section from '../components/lib/Section';
import Title from '../components/lib/Title';
import Container from '../components/lib/Container';
import useBreakpoint from '../lib/useBreakpoint';

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


const TextBlock = styled.div`
  display: inline-block;
  width: 460px;

  margin-top: 135px;
  margin-left: auto;
  margin-bottom: 135px;

  @media(max-width: 425px) {
    margin-top: 80px;
    margin-bottom: 90px;
  }
`;

const StyledTitle = styled(Title)`
  margin-bottom: 40px;
`;

const DescriptionParagraph = styled.p`
  margin-top: 0;
  margin-bottom: 1em;
`;

/**
 * Quests and quizzes section component
 */
export default function QuestsAndQuizzes(): ReactElement {
  const breakpoints = useBreakpoint();

  return (
    <Section>
      <Container>
        {
          !breakpoints.isXs &&
          <PhoneWrapper>
            <BlueCircle/>
            <YellowCircle/>
            <Phone src='/images/screenshots/quest-passing/phone.png'/>
            <LeftBlock src='/images/screenshots/quest-passing/left.png'/>
            <RightBlock src='/images/screenshots/quest-passing/right.png'/>
          </PhoneWrapper>
        }
        <TextBlock>
          <StyledTitle>
            Квесты и квизы
          </StyledTitle>
          <DescriptionParagraph>
            Проходя квесты и выполняя квизы, можно не только узнать много нового, но и проверить свою эрудицию.
          </DescriptionParagraph>
          {
            breakpoints.isXs &&
            <PhoneWrapper>
              <BlueCircle/>
              <YellowCircle/>
              <Phone src='/images/screenshots/quest-passing/phone.png'/>
              <LeftBlock src='/images/screenshots/quest-passing/left.png'/>
              <RightBlock src='/images/screenshots/quest-passing/right.png'/>
            </PhoneWrapper>
          }
          <DescriptionParagraph>
            В  наших квестах ты сможешь попробовать себя в роли сыщика, прожить один день вместе с любимым литературным персонажем или попытаться пройти по исторически опасному району и не попасть в неприятности.
          </DescriptionParagraph>
          <DescriptionParagraph>
            Закрепляй новые знания и проверяй себя с помощью квизов, чтобы получить награды за правильные ответы.
          </DescriptionParagraph>
        </TextBlock>
      </Container>
    </Section>
  );
}
