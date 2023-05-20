import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";
import TopBar from "~/components/TopBar";
import PageSkeleton from "./pageSkeleton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Big Jeff&apos;s Golf</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageSkeleton>
        <h1 className={styles.title}>Track your GOLF</h1>
        <div className={styles.cardRow}>
          <Link
            className={styles.card}
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className={styles.cardTitle}>Create an Account</h3>
            <div className={styles.cardText}>
              Sign in, or create an account to validate it&apos;s you! That way
              Bob Veal isn&apos;t giving you extra 3 putts!
            </div>
          </Link>
        </div>
      </PageSkeleton>
    </>
  );
};

export default Home;
