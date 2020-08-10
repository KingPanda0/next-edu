import "../assets/init.css";
import { DefaultSeo } from "next-seo";
import seoConfig from "../siteConfig.json";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </>
  );
}
