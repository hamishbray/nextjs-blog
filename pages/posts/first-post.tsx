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

    <main className="container mx-auto px-5 min-h-screen flex flex-col justify-center items-center">
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
