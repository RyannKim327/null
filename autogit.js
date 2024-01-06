const pattern = "abc";
const text = "ababcabcabcabc";

const matchIndexes = boyerMooreSearch(pattern, text);

console.log("Match indexes:", matchIndexes);
Match indexes: [2, 5, 8, 11, 14]
