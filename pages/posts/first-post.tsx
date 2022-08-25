import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/layout';
import Profile from '../../components/profile';

const FirstPost: NextPage = () => (
  <Layout>
    <Head>
      <title>First Post</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="container flex flex-col items-center justify-center min-h-screen px-5 mx-auto">
      <h1 className="text-4xl">First Post</h1>
      <p>
        Return{' '}
        <Link href="/">
          <a className="hover:text-blue-600 hover:border-blue-600" rel="noopener noreferrer">
            home
          </a>
        </Link>
      </p>
      <Profile />
    </main>
  </Layout>
);

export default FirstPost;
