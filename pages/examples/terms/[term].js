import SEO from "@/core/SEO.js";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { getAllTermsWithSlug, getTerm } from "@/lib/api";
import CommonLayout from "@/components/common/CommonLayout.js";
import ContentRichText from "@/components/common/ContentRichText.js";
import Link from "next/link";
export default function Term({ term }) {
  const router = useRouter();

  if (!router.isFallback && !term) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <CommonLayout>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <div>
          <SEO
            title={term.word}
            pageTitle={"The Encyclopledia"}
            description={term.description}
            url={`https://next-edu.vercel.app/examples/terms/${term.word}`}
          />
          <h1>{term.word}</h1>
          <ContentRichText document={term.meaning} />
          <hr />
          <div className="py-6 flex flex-row-reverse">
            <Link href="/examples/terms/" as="/examples/terms/">
              <a>Go to Homepage</a>
            </Link>
          </div>
        </div>
      )}
    </CommonLayout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getTerm(params.term);
  return {
    props: {
      term: data?.term ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allTerms = await getAllTermsWithSlug();
  return {
    paths: allTerms?.map(({ term }) => `/examples/terms/${term}`) ?? [],
    fallback: true,
  };
}