import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidbar'
import Widget from '../components/Widget'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from "../typings";

interface Props{
  tweets:Tweet[]
}

const Home = ({tweets}:Props) => {
  console.log(tweets)
  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
      <Head>
        <title>Twitter-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>
      <Sidebar />

      <Feed />

      <Widget />
      </main>
    
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  console.log(tweets)
  return{
    Props:{
      tweets,
    }
  }
}