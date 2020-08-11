import Link from "next/link";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { getAllTerms } from "@/lib/api";
import CommonLayout from "@/components/common/CommonLayout.js";
import SEO from "@/core/SEO.js";
import Quizzes from "@/components/common/Quizzes.js";

export default function Term({ terms }) {
  return (
    <CommonLayout>
      <SEO
        pageTitle="The Encyclopledia"
        url="https://next-edu.vercel.app/examples/terms/"
      />
      <section>
        <h3>
          Trending Terms: <small>See All Terms</small>
        </h3>
        <div className="mt-8 mb-24 grid gap-5 max-w-lg mx-auto lg:grid-cols-6 lg:max-w-none">
          {terms.map((t) => (
            <div
              key={t}
              className="flex flex-col shadow-lg overflow-hidden rounded py-3 p-6 bg-gray-100 text-center"
            >
              <Link
                href={`/examples/terms/${t.word}`}
                as={`/examples/terms/${t.word}`}
              >
                <a className="text-blue-900 leading-5 font-semibold">
                  {t.word}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3>
          Trending Quizzes: <small>See All Quizzes</small>
        </h3>
        <Quizzes />
      </section>
      <div className="cta"></div>
    </CommonLayout>
  );
}

export async function getStaticProps() {
  const data = await getAllTerms();
  return {
    props: {
      terms: data,
    },
  };
}
