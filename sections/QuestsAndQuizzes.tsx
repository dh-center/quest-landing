import { ReactElement } from 'react';
import styled from 'styled-components';
import Section from '../components/lib/Section';
import Title from '../components/lib/Title';

const StyledSection = styled(Section)`
  padding: 135px 0 0;
`;

const TextBlock = styled.div`
  display: inline-block;
  width: 460px;
  margin-left: auto;
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
    <StyledSection>
      <img src="/images/screenshots/quest-passing.png" alt="Скриншот процесса прохождения квеста"/>
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
    </StyledSection>
  );
}
