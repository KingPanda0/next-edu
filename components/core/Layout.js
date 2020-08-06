import Head from "next/head";
import Link from "next/link";
import s from "./Layout.module.css";

export default function Layout({ children, showGoBack, styled }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
      </Head>
      <header className={s.header}>
        <div>
          <h1>next-educational</h1>
          <p>
            A proof of concept using a <strong>NextJS</strong> seed ready to be
            deployed with <strong>Vercel</strong>.
          </p>
          {showGoBack && (
            <Link href="/">
              <a>Go back</a>
            </Link>
          )}
        </div>
      </header>
      <main className={s.container}>{children}</main>
    </>
  );
}
