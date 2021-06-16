import { ReactElement } from 'react';
import styled from 'styled-components';
import Section from '../components/lib/Section';
import Title from '../components/lib/Title';
import Container from '../components/lib/Container';

const Phone = styled.img`
  margin-top: 135px;

  @media(max-width: 425px) {
    display: none;
  }
`;

const TextBlock = styled.div`
  display: inline-block;
  width: 460px;

  margin-top: 135px;
  margin-left: auto;

  @media(max-width: 425px) {
    margin-top: 80px;
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
  return (
    <Section>
      <Container>
        <Phone src="/images/screenshots/quest-passing.png" alt="Скриншот процесса прохождения квеста"/>
        <TextBlock>
          <StyledTitle>
            Квесты и квизы
          </StyledTitle>
          <DescriptionParagraph>
            Проходя квесты и выполняя квизы, можно не только узнать много нового, но и проверить свою эрудицию.
          </DescriptionParagraph>
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
