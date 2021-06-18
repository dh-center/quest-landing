import Head from 'next/head';
import { ReactElement } from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import Main from '../sections/Main';
import Advantages from '../sections/Advantages';
import QuestsAndQuizzes from '../sections/QuestsAndQuizzes';
import AchievementsAndFriends from '../sections/AchievementsAndFriends';
import PersonCards from '../sections/PersonCards';
import Download from '../sections/Download';
import Footer from '../components/Footer';
import Partners from '../sections/Partners';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  padding-top: 96px;

  display: flex;
  flex-direction: column;

  @media(max-width: 425px) {
    padding-top: 74px;
  }
`;

/**
 * Main page
 */
export default function Home(): ReactElement {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Que.St</title>
        <meta name="description" content="🎮 Исследуй город играя!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>

      <Header/>

      <Main id='about'/>
      <Advantages/>
      <QuestsAndQuizzes/>
      <AchievementsAndFriends/>
      <PersonCards/>

      <Download id='download'/>

      <Partners/>

      <Footer id='contacts'/>
    </Container>
  );
}
