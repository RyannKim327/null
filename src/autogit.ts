function reverseWords(input: string): string {
    // Step 1: Trim the input to remove leading/trailing whitespace
    const trimmed = input.trim();
    
    // Step 2: Split the string into an array of words based on spaces
    // Using regex /\s+/ to handle multiple spaces
    const words = trimmed.split(/\s+/);
    
    // Step 3: Reverse the array of words
    const reversedWords = words.reverse();
    
    // Step 4: Join the reversed array back into a string with single spaces
    return reversedWords.join(' ');
}

// Example Usage:
const sentence = "  Hello   world this is TypeScript  ";
const reversed = reverseWords(sentence);
console.log(reversed); // Output: "TypeScript is this world Hello"
function reverseWordsManual(input: string): string {
    const trimmed = input.trim();
    const words = trimmed.split(/\s+/);
    const reversedWords: string[] = [];

    // Iterate over the words array from the end to the beginning
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }

    return reversedWords.join(' ');
}

// Example Usage:
const sentenceManual = "  Manual reverse implementation example  ";
const reversedManual = reverseWordsManual(sentenceManual);
console.log(reversedManual); // Output: "example implementation reverse Manual"
function reverseWordsWithPunctuation(input: string): string {
    const trimmed = input.trim();
    const words = trimmed.match(/\b\w+\b/g); // Match whole words
    
    if (!words) return ''; // Return empty string if no words found

    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}

// Example Usage:
const sentencePunct = "Hello, world! This is TypeScript.";
const reversedPunct = reverseWordsWithPunctuation(sentencePunct);
console.log(reversedPunct); // Output: "TypeScript is This world Hello"
// Method 1: Using Built-in Methods
function reverseWords(input: string): string {
    const trimmed = input.trim();
    const words = trimmed.split(/\s+/);
    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}

// Method 2: Manual Reversal
function reverseWordsManual(input: string): string {
    const trimmed = input.trim();
    const words = trimmed.split(/\s+/);
    const reversedWords: string[] = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }
    return reversedWords.join(' ');
}

// Method 3: Handling Punctuation
function reverseWordsWithPunctuation(input: string): string {
    const trimmed = input.trim();
    const words = trimmed.match(/\b\w+\b/g);
    if (!words) return '';
    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}

// Test Cases
const sentences = [
    "  Hello   world this is TypeScript  ",
    "Manual reverse implementation example",
    "Hello, world! This is TypeScript."
];

console.log("Method 1:");
sentences.forEach(sentence => {
    console.log(reverseWords(sentence));
});

console.log("\nMethod 2:");
sentences.forEach(sentence => {
    console.log(reverseWordsManual(sentence));
});

console.log("\nMethod 3:");
sentences.forEach(sentence => {
    console.log(reverseWordsWithPunctuation(sentence));
});
Method 1:
TypeScript is this world Hello
example implementation reverse Manual
TypeScript is This world Hello

Method 2:
TypeScript is this world Hello
example implementation reverse Manual
TypeScript is This world Hello

Method 3:
TypeScript is this world Hello
example implementation reverse Manual
TypeScript is This world Hello
