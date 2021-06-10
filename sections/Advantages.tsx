import { ReactElement } from 'react';
import styled from 'styled-components';
import Section from '../components/lib/Section';
import Container from '../components/lib/Container';

const StyledSectionGray = styled(Section)`
  background: var(--color-background-gray);
`;

const AdvantagesWrapper = styled.div`
  width: 100%;
  padding: 120px 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const AdvantageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

const AdvantageImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 180px;
  width: 180px;

  border-radius: 30px;
  background: var(--color-white);
  margin-bottom: 28px;
`;

/**
 * Advantages section component
 */
export default function Advantages(): ReactElement {
  return (
    <StyledSectionGray>
      <Container>
        <AdvantagesWrapper>
          <AdvantageItem>
            <AdvantageImage>
              <img src='/images/advantages/library.svg' alt='Книга'/>
            </AdvantageImage>
            Библиотека маршрутов<br/>по разным тематикам
          </AdvantageItem>
          <AdvantageItem>
            <AdvantageImage>
              <img src='/images/advantages/content.svg' alt='Кубок'/>
            </AdvantageImage>
            Премиальный контент,<br/>награды и достижения
          </AdvantageItem>
          <AdvantageItem>
            <AdvantageImage>
              <img src='/images/advantages/free.svg' alt='Подарок'/>
            </AdvantageImage>
            Бесплатно,<br/>без рекламы
          </AdvantageItem>
        </AdvantagesWrapper>
      </Container>
    </StyledSectionGray>
  );
}
