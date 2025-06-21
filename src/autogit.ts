function areAnagrams(str1: string, str2: string): boolean {
    // Step 1: Normalize the strings (remove spaces, convert to lowercase)
    const normalize = (str: string): string =>
        str.replace(/\s+/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // Step 2: Sort the characters of both strings
    const sortString = (str: string): string =>
        str.split('').sort().join('');

    const sortedStr1 = sortString(normalizedStr1);
    const sortedStr2 = sortString(normalizedStr2);

    // Step 3: Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false
function areAnagramsUsingFrequency(str1: string, str2: string): boolean {
    // Normalize the strings
    const normalize = (str: string): string =>
        str.replace(/\s+/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // If lengths differ, they cannot be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Create a character frequency map for the first string
    const charCount = new Map<string, number>();
    for (const char of normalizedStr1) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Compare with the second string
    for (const char of normalizedStr2) {
        if (!charCount.has(char)) {
            return false; // Character not found in the first string
        }
        const count = charCount.get(char)!;
        if (count === 1) {
            charCount.delete(char); // Remove the character if its count reaches zero
        } else {
            charCount.set(char, count - 1); // Decrease the count
        }
    }

    // If the map is empty, the strings are anagrams
    return charCount.size === 0;
}

// Example usage:
console.log(areAnagramsUsingFrequency("listen", "silent")); // Output: true
console.log(areAnagramsUsingFrequency("hello", "world"));   // Output: false
// Using sorting
function areAnagrams(str1: string, str2: string): boolean {
    const normalize = (str: string): string => str.replace(/\s+/g, '').toLowerCase();
    const sortString = (str: string): string => str.split('').sort().join('');
    return sortString(normalize(str1)) === sortString(normalize(str2));
}

// Using frequency count
function areAnagramsUsingFrequency(str1: string, str2: string): boolean {
    const normalize = (str: string): string => str.replace(/\s+/g, '').toLowerCase();
    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);
    if (normalizedStr1.length !== normalizedStr2.length) return false;
    const charCount = new Map<string, number>();
    for (const char of normalizedStr1) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (const char of normalizedStr2) {
        if (!charCount.has(char)) return false;
        const count = charCount.get(char)!;
        if (count === 1) charCount.delete(char);
        else charCount.set(char, count - 1);
    }
    return charCount.size === 0;
}
