import s from "./CommonLayout.module.css";
import Link from "next/link";
import Search from "./Search.js";
export default function CommonLayout({ children }) {
  return (
    <>
      <header className={s.header}>
        <div>
          <Link href="/examples/terms" as="/examples/terms">
            <h1>Encyclopedia</h1>
          </Link>
        </div>
      </header>
      <Search />
      <main className={s.container}>{children}</main>
    </>
  );
}
