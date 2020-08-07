import React from "react";
import { NextSeo } from "next-seo";
import siteConfig from "../../siteConfig.json";

export default function SEO({
  url,
  title,
  description,
  pageTitle = siteConfig.title,
}) {
  return (
    <>
      <NextSeo
        title={title ? `${title} - ${pageTitle}` : pageTitle}
        canonical={url}
        description={description}
      />
    </>
  );
}
