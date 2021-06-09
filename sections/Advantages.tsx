import { ReactElement } from 'react';
import SectionGray from '../components/lib/Section/SectionGray';
import styled from 'styled-components';

const StyledSectionGray = styled(SectionGray)`
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
    </StyledSectionGray>
  );
}
