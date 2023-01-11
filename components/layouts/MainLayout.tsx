import * as React from 'react';
import Head from "next/head";
import { NavBar } from "../NavBar";
import styles from "./MainLayouts.module.css";

interface Props {
  children?: React.ReactNode
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </>
  );
};
