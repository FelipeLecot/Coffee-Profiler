import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Form from './components/Form'
import Result from './components/Result'

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Profiler</title>
        <meta name="description" content="Coffee profiler" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className={styles.header}>
        <Image src="/logo.png" alt="Coffee Profiler Logo" width={50} height={50} />
        <div>
          <h1>Coffee Profiler</h1>
        </div>
        <div className={styles.translations}>
          <a href='./es/'>ES</a>
          <a href='./en/'>EN</a>
          <a href='./pt/'>PT</a>
          <a href='./it/'>IT</a>
          <a href='./fr/'>FR</a>
        </div>
      </header>
      <div className={styles.app}>
        <div>
          <h1>Discover your perfect coffee</h1>
          <Form />
        </div>
        <div>
          <Result />
        </div>
      </div>
      <h3>Missing your favorite coffee? <Link href="./review/">Write a review</Link></h3>
      <h3>Are you a farmer / roaster? <Link href="./register/">Create a profile</Link></h3>
    </>
  )
}
