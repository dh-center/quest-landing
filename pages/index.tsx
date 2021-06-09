import Head from 'next/head';
import { ReactElement } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import Main from '../sections/Main';
import Advantages from '../sections/Advantages';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  padding-top: 96px;
`;

/**
 * Main page
 */
export default function Home(): ReactElement {
  return (
    <Container>
      <Head>
        <title>Que.St</title>
        <meta name="description" content="🎮 Исследуй город играя!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>

      <Header/>

      <Main/>
      <Advantages/>
    </Container>
  );
}
