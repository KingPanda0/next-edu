import s from "./Search.module.css";

export default function Search() {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <h3 className={s.headline}>
          The world standard in knowledge since 1768
        </h3>

        <form
          className="mt-8 flex justify-center sm:flex"
          aria-labelledby="newsletter-headline"
        >
          <input
            aria-label="Search Encyclopedia"
            type="email"
            required
            className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out max-w-xl"
            placeholder="Search Term"
          />
        </form>
        <nav className="flex flex-col md:flex-wrap md:flex-row border-blue-dark items-center justify-center">
          <div className="px-3 py-2 text-base text-sm text-center font-semibold tracking-wide uppercase">
            Encyclopedia Categories
          </div>
          <a
            href="#"
            className="ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-100"
          >
            Health & Medicine
          </a>
          <a
            href="#"
            className="ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-100"
          >
            Lifestyles & Social Issues
          </a>
          <a
            href="#"
            className="ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-700 bg-gray-100 focus:outline-none focus:bg-gray-200"
            aria-current="page"
          >
            Literature
          </a>
          <a
            href="#"
            className="ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-100"
          >
            Politics
          </a>
          <a
            href="#"
            className="ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-100"
          >
            Law & Government
          </a>
        </nav>
      </div>
    </section>
  );
}
