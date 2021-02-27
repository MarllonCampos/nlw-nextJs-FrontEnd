import Head from 'next/head';
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/Experience";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";


import styles from '../styles/pages/Home.module.css'
import { CountDownProvider } from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';


interface HomeProps {
  level: number
  currentExperience:  number
  challengesCompleted: number
}


export default function Home(props: HomeProps) {


  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Inicio | MoveIt</title>
        </Head>
        <ExperienceBar />


        <CountDownProvider>

          <section>

            <div>
              <Profile />

              <CompletedChallenges />
              <CountDown />
            </div>


            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = {
    level: 1,
    currentExperience: 0,
    challengesCompleted: 0,
  }

  const { level, currentExperience, challengesCompleteted } = ctx.req.cookies;




  return {
    props: {
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleteted:Number(challengesCompleteted)
    }
  }
}