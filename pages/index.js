import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className="title">
        Read{' '}
        <Link href="/posts/first-post">
          <a>This page!</a>
        </Link>
      </h1>
    </div>
  )
}
