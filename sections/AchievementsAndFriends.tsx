import { ReactElement } from 'react';
import styled from 'styled-components';
import Section from '../components/lib/Section';
import Title from '../components/lib/Title';
import Button from '../components/lib/Button';

const StyledSection = styled(Section)`
  padding: 135px 0 0;
`;

const TextBlock = styled.div`
  display: inline-block;
  width: 496px;
  margin-right: auto;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 40px;
`;

const DescriptionParagraph = styled.p`
  width: 460px;

  margin-top: 0;
  margin-bottom: 1em;
`;

/**
 * Achievements and friend section component
 */
export default function AchievementsAndFriends(): ReactElement {
  return (
    <StyledSection>
      <TextBlock>
        <StyledTitle>
          Достижения и друзья
        </StyledTitle>
        <DescriptionParagraph>
          Гуляй по Петербургу с нашим приложением и накапливай очки опыта. Выполняя задания, можно получать достижения и открывать премиальный контент.
        </DescriptionParagraph>
        <DescriptionParagraph>
          Вместе веселее! Приглашай друзей в приложение, чтобы проходить квесты вместе, следить за их прогрессом и хвастаться своими ачивками.
        </DescriptionParagraph>
        <Button href='https://github.com/dh-center/quest'>Скачать</Button>
      </TextBlock>
      <img src="/images/screenshots/account.png" alt="Скриншот окна аккаунта"/>
    </StyledSection>
  );
}
