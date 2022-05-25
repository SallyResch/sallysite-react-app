import Head from "next/head";
import Link from "next/link";
import Script from 'next/script';

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>First post</title>
        <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)}
        />
      </Head>
      <h2>
        <Link href='/'>
          <a>Back to Homepage</a>
        </Link>
      </h2>
      <h1>First Post</h1>
      <Link href='/posts/result-page'>
        <button>click</button>
      </Link>
    </div>
  )
}