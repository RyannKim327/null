function areAnagrams(str1: string, str2: string): boolean {
    // Remove spaces and convert to lowercase
    const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // Sort the characters of both strings
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    // Compare sorted versions
    return sortedStr1 === sortedStr2;
}

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("Hello", "Olelh"));   // true
console.log(areAnagrams("Test", "Taste"));     // false
function areAnagrams(str1: string, str2: string): boolean {
    // Remove spaces and convert to lowercase
    const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // If lengths are different, they cannot be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Create frequency maps for both strings
    const charCount: { [key: string]: number } = {};

    for (const char of normalizedStr1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of normalizedStr2) {
        if (!charCount[char]) {
            return false; // Character not found or too many instances
        }
        charCount[char]--;
    }

    // Check if all counts are zero
    return Object.values(charCount).every(count => count === 0);
}

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("Hello", "Olelh"));   // true
console.log(areAnagrams("Test", "Taste"));     // false
