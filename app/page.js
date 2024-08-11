import React from "react";
import Link from "next/link";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>AI Support Platform</div>
        <Link href="/login">
          <button className={styles.getStartedBtn}>Get Started</button>
        </Link>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to AI Customer Support</h1>
        <p className={styles.description}>
          Revolutionize your customer support with AI-powered Platform
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h2>24/7 Support</h2>
            <p>
              Our AI never sleeps, providing round-the-clock support for your
              customers
            </p>
          </div>
          <div className={styles.feature}>
            <h2>Instant Response</h2>
            <p>
              Get instant responses to customer queries, no more waiting in
              queues
            </p>
          </div>
          <div className={styles.feature}>
            <h2>Scalable Solution</h2>
            <p>
              Handle thousands of inquiries simultaneously without compromising
              quality
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
