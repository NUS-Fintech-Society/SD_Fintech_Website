import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Nus FinTech Society</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NUS Fintech Society</h1>
      </main>
    </div>
  );
}
