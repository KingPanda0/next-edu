import { BLOCKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function ContentRichText({ document }) {
  let options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) =>
        `
          <figure class="inline-block relative bg-white overflow-hidden">
            <img class=" shadow mb-6 sm:rounded-lg" src="${node.data.target.fields.file.url}"/>
            <figcaption>
              <span class="block text-blue-600 font-semibold">${node.data.target.fields.title}</span>
              <span class="block text-grey-200">${node.data.target.fields.description}</span>
            </figcaption>
          </figure>
        `,
    },
  };
  return (
    <div
      className="prose pb-6"
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(document, options),
      }}
    />
  );
}
