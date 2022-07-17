import { Button, Container, Loading } from '@nextui-org/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Suspense } from 'react'
import { useQuery } from 'react-query'

import { get } from '@/utils/fetcher'

const HOUSE_OF_REPRESENTATIVES_BILL_SUMMARY_URL =
  'https://raw.githubusercontent.com/smartnews-smri/house-of-representatives/main/data/gian_summary.json' as const

const Home: NextPage = () => {
  const { data } = useQuery(
    ['test'],
    () => get(HOUSE_OF_REPRESENTATIVES_BILL_SUMMARY_URL),
    {
      suspense: true,
    },
  )

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <Container>
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <Suspense fallback={<Loading />}>
            <p>{data}</p>
          </Suspense>

          <Button
            shadow
            onPress={(e) => {
              console.log(e.pointerType)
            }}
          >
            test
          </Button>

          <div>
            <a href="https://nextjs.org/docs">
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </Container>
      </main>

      <footer>
        <Container>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Powered by{' '}
            <span>
              <Image
                alt="Vercel Logo"
                height={16}
                src="/vercel.svg"
                width={72}
              />
            </span>
          </a>
        </Container>
      </footer>
    </>
  )
}

export default Home
