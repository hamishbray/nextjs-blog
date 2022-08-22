import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import styles from './gallery.module.css';

const images = [
  {
    id: '1040',
    alt: 'a house on a mountain',
  },
  {
    id: '106',
    alt: 'some pink flowers',
  },
  {
    id: '136',
    alt: 'big rocks with some trees',
  },
  {
    id: '1039',
    alt: 'waterfall, a lot of trees and a great view from the sky',
  },
  {
    id: '110',
    alt: 'a cool landscape',
  },
  {
    id: '1047',
    alt: 'inside a town between two big buildings',
  },
];

const GalleryIndex: NextPage = () => (
  <Layout>
    <Head>
      <title>Gallery</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="container flex flex-col items-center justify-center min-h-screen px-5 mx-auto">
      <h1 className="mb-8 text-4xl">Gallery</h1>
      <div className={styles.gallery}>
        {images.map(({ id, alt }) => (
          <Image key={id} src={`https://picsum.photos/id/${id}/300/300`} height={300} width={300} alt={alt} />
        ))}
      </div>
    </main>
  </Layout>
);

export default GalleryIndex;
