import Head from 'next/head'
import About from "./components/About";

export default function Home() {
  return (
    <div className="space-y-0 lg:space-y-0">
      <Head>
        <title>Rekha Garg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </main>
    </div>
  )
}