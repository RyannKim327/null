function reverseWords(input: string): string {
    // Split the string by spaces into an array of words
    const wordsArray = input.split(' ');
    
    // Reverse the array of words
    const reversedArray = wordsArray.reverse();
    
    // Join the reversed array back into a string
    const reversedString = reversedArray.join(' ');
    
    return reversedString;
}

// Usage
const sentence = "Hello world from TypeScript";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: "TypeScript from world Hello"
function reverseWordsImproved(input: string): string {
    // Use regex to split by one or more whitespace characters
    const wordsArray = input.trim().split(/\s+/);
    
    // Reverse the array of words
    const reversedArray = wordsArray.reverse();
    
    // Join the reversed array back into a string with a single space
    const reversedString = reversedArray.join(' ');
    
    return reversedString;
}

// Usage
const sentenceWithSpaces = "   Hello   world from   TypeScript   ";
const reversedSentenceWithSpaces = reverseWordsImproved(sentenceWithSpaces);
console.log(reversedSentenceWithSpaces); // Output: "TypeScript from world Hello"
function reverseWordsModern(input: string): string {
    return input.trim().split(/\s+/).reverse().join(' ');
}

// Usage
const sentenceModern = "Hello world from TypeScript";
const reversedSentenceModern = reverseWordsModern(sentenceModern);
console.log(reversedSentenceModern); // Output: "TypeScript from world Hello"
function reverseWordsManual(input: string): string {
    const wordsArray = input.trim().split(/\s+/);
    const reversedArray: string[] = [];
    
    for (let i = wordsArray.length - 1; i >= 0; i--) {
        reversedArray.push(wordsArray[i]);
    }
    
    return reversedArray.join(' ');
}

// Usage
const sentenceManual = "Hello world from TypeScript";
const reversedSentenceManual = reverseWordsManual(sentenceManual);
console.log(reversedSentenceManual); // Output: "TypeScript from world Hello"
function reverseWordsComprehensive(input: string): string {
    if (!input || typeof input !== 'string') {
        throw new TypeError("Input must be a non-empty string.");
    }

    const trimmed = input.trim();

    if (trimmed.length === 0) {
        return ''; // or throw an error based on requirements
    }

    const wordsArray = trimmed.split(/\s+/);
    const reversedArray = wordsArray.reverse();
    return reversedArray.join(' ');
}

// Usage Examples
try {
    console.log(reverseWordsComprehensive("Hello world from TypeScript")); // "TypeScript from world Hello"
    console.log(reverseWordsComprehensive("   Leading and trailing spaces   ")); // "spaces trailing and Leading"
    console.log(reverseWordsComprehensive("")); // ""
    console.log(reverseWordsComprehensive(123 as any)); // Throws TypeError
} catch (error) {
    console.error(error.message);
}
function reverseWords(input: string): string {
    if (!input || typeof input !== 'string') {
        throw new TypeError("Input must be a non-empty string.");
    }

    const trimmed = input.trim();

    if (trimmed.length === 0) {
        return '';
    }

    return trimmed.split(/\s+/).reverse().join(' ');
}

// Example Usage
const original = "  TypeScript makes JavaScript better  ";
const reversed = reverseWords(original);
console.log(reversed); // Output: "better JavaScript makes TypeScript"
