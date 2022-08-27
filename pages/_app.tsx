import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useClient } from "../lib/client";
import "../styles/input.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Global/Navbar";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const client = useClient();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Jonathan van den Berg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider session={session}>
        <ApolloProvider client={client}>
          <Navbar />
          <Component {...pageProps} />
        </ApolloProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
