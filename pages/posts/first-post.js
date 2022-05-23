import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
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