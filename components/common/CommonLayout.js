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
            className="text-center mt-8 flex flex-col justify-center items-top md:flex-wrap md:flex-row p-6"
            aria-labelledby="newsletter-headline"
          >
            <input
              aria-label="Enter your email"
              type="email"
              required
              className="appearance-none w-full px-4 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out max-w-xl"
              placeholder="Enter your email"
            />
            <button className="max-w-xl md:ml-6">Subscribe</button>
          </form>
          <span className="block text-center p-6 border-b m-3 border-blue-800">
            By signing up for this email, you are agreeing to news, offers, and
            information from Encyclopaedia Britannica. Click here to view our
            Privacy Notice. Easy unsubscribe links are provided in every email.
          </span>
          <div className="max-w-screen-xl mx-auto py-3 px-6 pb-12 border-b border-blue-800">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
              <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                      Solutions
                    </h4>
                    <ul class="mt-4">
                      <li>
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Marketing
                        </a>
                      </li>
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Analytics
                        </a>
                      </li>
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Commerce
                        </a>
                      </li>
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Insights
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-12 md:mt-0">
                    <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                      Support
                    </h4>
                    <ul class="mt-4">
                      <li>
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Pricing
                        </a>
                      </li>
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Documentation
                        </a>
                      </li>
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Guides
                        </a>
                      </li>
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          API Status
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                      Company
                    </h4>
                    <ul class="mt-4">
                      <li>
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          About
                        </a>
                      </li>
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Blog
                        </a>
                      </li>
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Jobs
                        </a>
                      </li>
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Press
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-12 md:mt-0">
                    <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                      Legal
                    </h4>
                    <ul class="mt-4">
                      <li>
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Claim
                        </a>
                      </li>
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Privacy
                        </a>
                      </li>
                      <li class="mt-4">
                        <a
                          href="#"
                          class="text-base leading-6 text-gray-300 hover:text-white"
                        >
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto pt-3 px-6">
            <nav className="flex flex-col md:flex-wrap md:flex-row  items-center justify-between p-2 mt-3 cursor-pointer max-w-4xl mx-auto">
              <a>About Us & Legal Info</a>
              <a>Partner Program</a>
              <a>Contact Us</a>
              <a>Privacy Notice</a>
              <a>Terms of Use</a>
            </nav>
          </div>
          <span className="block text-center m-12">
            ©2020 Encyclopædia Vercelannica, Inc.
          </span>
        </div>
      </footer>
    </>
  );
}
