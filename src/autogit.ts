function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings: remove spaces, convert to lowercase
    const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // Sort the characters and compare
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "Olelh"));   // true
console.log(areAnagrams("Test", "Best"));     // false
function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings: remove spaces, convert to lowercase
    const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // If lengths differ, they cannot be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Build a frequency map for the first string
    const charFrequency = new Map<string, number>();
    for (const char of normalizedStr1) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Compare with the second string
    for (const char of normalizedStr2) {
        if (!charFrequency.has(char)) {
            return false; // Character not found in the first string
        }
        const count = charFrequency.get(char)!;
        if (count === 0) {
            return false; // More occurrences of the character than in the first string
        }
        charFrequency.set(char, count - 1);
    }

    return true;
}

// Example usage:
console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "Olelh"));   // true
console.log(areAnagrams("Test", "Best"));     // false
