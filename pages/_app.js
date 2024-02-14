import "../styles/globals.scss";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>David Stevenoot</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
