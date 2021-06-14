import { ReactElement } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  padding-top: 96px;

  display: flex;
  flex-direction: column;
`;

/**
 * Contacts page
 */
export default function Contacts(): ReactElement {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Контакты - Que.St</title>
        <meta name="description" content="🎮 Исследуй город играя!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>

      <Header/>

      Контакты

      <Footer id='contacts'/>
    </Container>
  );
}
