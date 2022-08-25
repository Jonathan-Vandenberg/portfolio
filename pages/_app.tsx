import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useClient } from "../lib/client";
import "../styles/input.css";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useClient();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Jonathan van den Berg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
