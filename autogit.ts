function countWordOccurrences(str: string, word: string): number {
  return str.split(word).length - 1;
}
const str = "hello hello world hello";
const word = "hello";
const count = countWordOccurrences(str, word);
console.log(count); // Output: 3
function countWordOccurrences(str: string, word: string): number {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  return (str.match(regex) || []).length;
}
