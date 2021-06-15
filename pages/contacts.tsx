import { ReactElement } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/lib/Container';
import { sansSerifBold } from '../styles/FontStyles';

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  padding-top: 96px;

  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;

  margin-bottom: -6px;
`;

const StyledContainer = styled(Container)`
  display: block;
`;

const Title = styled.h1`
  ${ sansSerifBold };
  font-size: 48px;
  margin: 65px 0 40px;
`;

const Paragraph = styled.p`
  margin-top: 0;
`;

const Delimiter = styled.div`
  height: 6px;
  width: 100%;
  background: var(--color-background-gray);
  margin: 40px 0;
`;

const ContactsList = styled.ul`
  padding: 0 0 40px;
  margin: 0;
  list-style: none;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  img {
    color: var(--color-blue);
    margin-right: 10px;
  }
`;

const ContactItemLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: var(--color-black);
`;

const MapContainer = styled.iframe`
  position: relative;
  outline: none;
  border: none;
`;

/**
 * Contacts page
 */
export default function Contacts(): ReactElement {
  return (
    <PageContainer>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Контакты - Que.St</title>
        <meta name="description" content="🎮 Исследуй город играя!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>

      <Header/>

      <Content>
        <StyledContainer>
          <Title>
            Контакты
          </Title>
          <Paragraph>
            Данный проект поддерживается Центром Цифровых Гуманитарных<br/>Исследований Университета ИТМО.
          </Paragraph>
          <Paragraph>
            По всем вопросам и предложениям, касаемых работы приложения,<br/>Вы можете связаться с нами удобным для Вас способом!
          </Paragraph>
        </StyledContainer>
        <Delimiter/>
        <StyledContainer>
          <ContactsList>
            <ContactItem>
              <img src="/images/icons/map-blue.svg" alt="Карта"/>
              г. Санкт-Петербург, ул. Ломоносова, 9
            </ContactItem>
            <ContactItem>
              <img src="/images/icons/mail-blue.svg" alt="Письмо"/>
              <ContactItemLink href='mailto:dh@itmo.ru' target='_blank'>
                dh@itmo.ru
              </ContactItemLink>
            </ContactItem>
            <ContactItem>
              <img src="/images/icons/globe-blue.svg" alt="Глобус"/>
              <ContactItemLink href='https://dh.itmo.ru' target='_blank'>
                dh.itmo.ru
              </ContactItemLink>
            </ContactItem>
          </ContactsList>
        </StyledContainer>
        <MapContainer src="https://yandex.ru/map-widget/v1/-/CCUa7MsYkD" width="100%" height="500" frameBorder="1"
          allowFullScreen={true}/>
      </Content>
      <Footer id='contacts'/>
    </PageContainer>
  );
}
