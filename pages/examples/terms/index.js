import Link from "next/link";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { getAllTerms } from "@/lib/api";
import CommonLayout from "@/components/common/CommonLayout.js";
import SEO from "@/core/SEO.js";

export default function Term({ terms }) {
  return (
    <CommonLayout>
      <SEO
        pageTitle="The Encyclopledia"
        url="https://next-edu.vercel.app/examples/terms/"
      />
      <section>
        <h3>
          Trending Terms: <small>See All Quizzes</small>
        </h3>
        <ul>
          {terms.map((t) => (
            <li key={t}>
              <Link
                href={`/examples/terms/${t.word}`}
                as={`/examples/terms/${t.word}`}
              >
                <a>{t.word}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>
          Trending Quizzes: <small>See All Quizzes</small>
        </h3>
        <ul>
          {terms.map((t) => (
            <li key={t}>
              <Link
                href={`/examples/terms/${t.word}`}
                as={`/examples/terms/${t.word}`}
              >
                <a>{t.word}</a>
              </Link>
            </li>
          ))}
        </ul>
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
