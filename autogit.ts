function countOccurrences(sentence: string, word: string): number {
    // Normalize the string to lowercase and trim spaces, for case-insensitive counting
    const normalizedSentence = sentence.toLowerCase().trim();
    const normalizedWord = word.toLowerCase().trim();

    // Split the sentence into words using space as a delimiter
    const wordsArray = normalizedSentence.split(/\s+/);

    // Use filter to count occurrences of the specified word
    const occurrences = wordsArray.filter(w => w === normalizedWord).length;

    return occurrences;
}

// Example usage:
const sentence = "Hello world! The world is beautiful. Hello!";
const word = "hello";
const count = countOccurrences(sentence, word);
console.log(`The word "${word}" occurs ${count} time(s).`);
function countOccurrences(sentence: string, word: string): number {
    const normalizedSentence = sentence.toLowerCase().replace(/[.,?!;"]/g, '').trim();
    const normalizedWord = word.toLowerCase().trim();

    const wordsArray = normalizedSentence.split(/\s+/);
    const occurrences = wordsArray.filter(w => w === normalizedWord).length;

    return occurrences;
}
