import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Tracker from '../components/Tracker'
import styles from '../styles/Home.module.css'

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); 

export default function Home({cleaning}) {
  console.log(Date.now())
  console.log(cleaning.cleanedBy)
  return (
    <div className={styles.container}>  
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bathroom Tracker 3.0
        </h1>
        <Tracker cleaning={cleaning}></Tracker>
      </main>

      
    </div>
  )
}

export async function getServerSideProps() {
  const cleaning = await prisma.cleaning.findMany(); 
  return {
    props: {
      cleaning: cleaning[0]
    }
  }
}
