import { ReactElement } from 'react';
import Section from '../components/lib/Section';
import Container from '../components/lib/Container';
import styled from 'styled-components';
import Title from '../components/lib/Title';

const StyledContainer = styled(Container)`
  padding: 120px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 40px;
`;

const PartnersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PartnerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 200px;

  img {
    max-width: 100%;
  }
`;

/**
 *
 */
export default function Partners(): ReactElement {
  return (
    <Section>
      <StyledContainer>
        <StyledTitle>Партнёры</StyledTitle>
        <PartnersWrapper>
          <PartnerItem>
            <img src="/images/partners/library-mayakovsky.png" alt="Библиотека имени Маяковского"/>
          </PartnerItem>
          <PartnerItem>
            <img src="/images/partners/museum-dostoevsky.png" alt="Музей Достоевского"/>
          </PartnerItem>
          <PartnerItem>
            <img src="/images/partners/museum-spb.png" alt="Музей истории Санкт-Петербурга"/>
          </PartnerItem>
          <PartnerItem>
            <img src="/images/partners/museum-religion.png" alt="Музей истории религии"/>
          </PartnerItem>
          <PartnerItem>
            <img src="/images/partners/prozhito.png" alt="Прожито"/>
          </PartnerItem>
          <PartnerItem>
            <img src="/images/partners/pushkinsky-dom.png" alt="Пушкинский дом"/>
          </PartnerItem>
        </PartnersWrapper>
      </StyledContainer>
    </Section>
  );
}
