import s from "./CommonLayout.module.css";
import Link from "next/link";
import Search from "./Search.js";
export default function CommonLayout({ children }) {
  return (
    <>
      <header className={s.header}>
        <div className="flex">
          <nav>
            <a>Menu</a>
            <a>Search</a>
          </nav>

          <Link href="/examples/terms" as="/examples/terms">
            <h1>Encyclopedia</h1>
          </Link>

          <nav>
            <a>Login</a>
            <button>Subscribe Now</button>
          </nav>
        </div>
      </header>
      <Search />
      <main className={s.container}>{children}</main>
      <footer className={s.footer}>
        <div className="container mx-auto">
          <span className="block text-center p-6">
            <strong>Inspire your inbox</strong> – Sign up for daily fun facts
            about this day in history, updates, and special offers.
          </span>
          <form
            className="mt-8 flex flex-col justify-center items-top md:flex-wrap md:flex-row"
            aria-labelledby="newsletter-headline"
          >
            <input
              aria-label="Enter your email"
              type="email"
              required
              className="appearance-none w-full px-4 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out max-w-xl mr-6"
              placeholder="Enter your email"
            />
            <button>Subscribe</button>
          </form>
          <span className="block text-center p-6 border-b m-6 border-blue-800">
            By signing up for this email, you are agreeing to news, offers, and
            information from Encyclopaedia Britannica. Click here to view our
            Privacy Notice. Easy unsubscribe links are provided in every email.
          </span>
          <nav className="flex flex-col md:flex-wrap md:flex-row border-blue-dark items-center justify-between p-2 cursor-pointer">
            <a>About Us & Legal Info</a>
            <a>Partner Program</a>
            <a>Contact Us</a>
            <a>Privacy Notice</a>
            <a>Terms of Use</a>
          </nav>
          <span className="block text-center m-12">
            ©2020 Encyclopædia Vercelannica, Inc.
          </span>
        </div>
      </footer>
    </>
  );
}
