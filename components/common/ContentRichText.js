import { BLOCKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function ContentRichText({ document }) {
  let options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) =>
        `
          <div class="inline-block relative bg-white overflow-hidden shadow mb-6 sm:rounded-lg">
            <img class="x" src="${node.data.target.fields.file.url}"/>
          </div>
        `,
    },
  };
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(document, options),
      }}
    />
  );
}
