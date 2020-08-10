import SEO from "@/core/SEO.js";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { getAllTermsWithSlug, getTerm } from "@/lib/api";
import CommonLayout from "@/components/common/CommonLayout.js";
import ContentRichText from "@/components/common/ContentRichText.js";
import Link from "next/link";

export default function Term({ term }) {
  const router = useRouter();
  console.log(term);
  if (!router.isFallback && !term) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <CommonLayout>
      <SEO
        title={term.word}
        pageTitle={"The Encyclopledia"}
        description={term.description}
        url={`https://next-edu.vercel.app/examples/terms/${term.word}`}
      />
      {router.isFallback ? (
        <>
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-6 bg-gray-400 rounded w-3/4"></div>
              <div className="space-y-6">
                <div className="h-6 bg-gray-400 rounded"></div>
                <div className="h-6 bg-gray-400 rounded w-5/6"></div>
                <div className="h-6 bg-gray-400 rounded"></div>
                <div className="h-6 bg-gray-400 rounded w-5/6"></div>
                <div className="h-6 bg-gray-400 rounded w-5/6"></div>
                <div className="h-6 bg-gray-400 rounded"></div>
                <div className="h-6 bg-gray-400 rounded w-5/6"></div>
                <div className="h-6 bg-gray-400 rounded w-5/6"></div>
                <div className="h-6 bg-gray-400 rounded"></div>
                <div className="h-6 bg-gray-400 rounded w-5/6"></div>
                <div className="h-6 bg-gray-400 rounded w-5/6"></div>
                <div className="h-6 bg-gray-400 rounded"></div>
                <div className="h-6 bg-gray-400 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>{term.word}</h1>
          <ContentRichText document={term.meaning} />
          <hr />
          <div className="py-6 flex flex-row-reverse">
            <Link href="/examples/terms/" as="/examples/terms/">
              <a>Go to Homepage</a>
            </Link>
          </div>
        </>
      )}
    </CommonLayout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getTerm(params.term);

  return {
    props: {
      term: data?.term ?? null,
      revalidate: 5,
    },
  };
}

export async function getStaticPaths() {
  const allTerms = await getAllTermsWithSlug();

  return {
    paths: allTerms?.map(({ word }) => `/examples/terms/${word}`) ?? [],
    fallback: true,
  };
}
