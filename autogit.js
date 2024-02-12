function countOccurrences(string, word) {
  return string.split(" ").filter((item) => item.toLowerCase() === word.toLowerCase()).length;
}

const sentence = "This is a sample sentence. This sample sentence contains the word sample.";
const wordToCount = "sample";

const occurrences = countOccurrences(sentence, wordToCount);
console.log("Number of occurrences:", occurrences);
function countOccurrences(string, word) {
  const regex = new RegExp("\\b" + word + "\\b", "gi");
  return (string.match(regex) || []).length;
}

const occurrences = countOccurrences(sentence, wordToCount);
console.log("Number of occurrences:", occurrences);
function countOccurrences(string, word) {
  let count = 0;
  let index = string.toLowerCase().indexOf(word.toLowerCase());

  while (index !== -1) {
    count++;
    index = string.toLowerCase().indexOf(word.toLowerCase(), index + 1);
  }

  return count;
}

const occurrences = countOccurrences(sentence, wordToCount);
console.log("Number of occurrences:", occurrences);
