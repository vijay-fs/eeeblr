import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "./Sitepage/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>EEEBLR</title>
        <meta
          name="description"
          content="One stop shop for all your industrial and project requisites."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomePage />
    </>
  );
};


export default Home

