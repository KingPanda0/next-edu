import "../assets/init.css";
import { DefaultSeo } from "next-seo";
import Head from "../components/core/Head";
import seoConfig from "../siteConfig.json";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </>
  );
}
