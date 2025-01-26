import Link from "next/link";

import Header from "@/components/header";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <div className={styles.ctas}>
          <Link href="/about">about us</Link>
          <Link href="/blog">blog</Link>
        </div>
      </main>
    </div>
  );
}
