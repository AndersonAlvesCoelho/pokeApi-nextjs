import '../styles/global.scss'

import Head from 'next/head';
import { Header } from "../components/Header";
import { Pokemon } from "../components/Pokemon";

import style from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {

  return (
    <div className={style.wrapper}>
      <main>
        <Head>
          <title>PokeApi - NextJs</title>
          <meta name="description" content="Project poke api with NextJs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Component {...pageProps} />
      </main>

      <Pokemon />
    </div>
  )
}

export default MyApp
