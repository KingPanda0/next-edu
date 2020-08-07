import { createClient } from "contentful";
import { parseTermEntries } from "./helpers.js";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getAllTerms() {
  const entries = await client.getEntries({
    content_type: "term",
    order: "-fields.word",
  });
  return parseTermEntries(entries);
}

export async function getTerm(term) {
  const entry = await client.getEntries({
    content_type: "term",
    limit: 1,
    "fields.word[in]": term,
  });

  return {
    term: parseTermEntries(entry)[0],
  };
}

export async function getAllTermsWithSlug() {
  const entries = await client.getEntries({
    content_type: "term",
    select: "fields.word",
  });
  return parseTermEntries(entries, (model) => model.fields);
}
