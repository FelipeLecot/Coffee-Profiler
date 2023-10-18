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
        <meta name="description" content="Open-source coffee recommendation web app that uses cutting-edge vectorial data to suggest personalized brews based on your taste and location. Savor the perfect cup wherever you are." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <header className={styles.nav}>
        <Image src="/logo.png" alt="Coffee Profiler Logo" width={50} height={50} />
        <div>
          <h1>Coffee Profiler</h1>
        </div>
        <div>
          <a>Sign In</a>
        </div>
        <div>
          <a>Log In</a>
        </div>
      </header>
      <div className={styles.header}>
        <h1>Discover your perfect coffee</h1>
        <div className={styles.app}>
          <Form />
          <Result />
        </div>
        <h3>Missing your favorite coffee? <Link href="./review/">Write a review</Link></h3>
        <h3>Are you a farmer / roaster? <Link href="./register/">Create a profile</Link></h3>
      </div>
    </>
  )
}
