import "../styles/globals.scss";
import Head from "next/head";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import modal from "../reducers/modal";

const store = configureStore({
  reducer: { modal },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>David Stevenoot</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
