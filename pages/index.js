import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">
        Welcome{' '}
      </h1>
      <Link href="/posts/first-post">
        <a>My first post</a>
      </Link>
      <Link href="/contact/contact-sally">
        <a> Contact me</a>
      </Link>
      <Link href="/about/aboutPage">
        <a> About me</a>
      </Link>
      <Image src="/images/Selfie2019.jpg" alt="Sally" width={150} height={220} />
    </div>
  )
}
