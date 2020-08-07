function parseTerm({ fields }) {
  return {
    word: fields.word,
    meaning: fields.meaning,
    description: fields.description,
  };
}

export function parseTermEntries(entries, cb = parseTerm) {
  return entries?.items?.map(cb);
}
