import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';
import { format, parseISO } from 'date-fns';

type Props = {
  postData: PostData;
};

const Post: NextPage<Props> = ({ postData }: Props) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="container flex flex-col items-center justify-center min-h-screen px-5 mx-auto">
      <h1 className="mb-4 text-4xl">{postData.title}</h1>
      <p className="mb-8">Posted: {postData.date && format(parseISO(postData.date), 'do MMMM y')}</p>
      {postData.contentHtml && <div className="rich-text" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
    </main>
  </Layout>
);

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
