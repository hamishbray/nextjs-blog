import '../styles/globals.css';
import '../pages/posts/posts.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
