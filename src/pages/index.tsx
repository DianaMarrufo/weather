import Head from 'next/head'
import HomePage from './home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather | Diana</title>
        <meta name="description" content="Weather forecast " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  )
}
