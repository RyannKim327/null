function areAnagrams(str1: string, str2: string): boolean {
    // Remove whitespace and convert strings to lowercase
    const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // Check if lengths are different
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Create frequency maps for each string
    const charCount: { [key: string]: number } = {};

    for (const char of normalizedStr1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of normalizedStr2) {
        if (!charCount[char]) {
            return false; // Character not found or in excess
        }
        charCount[char] -= 1;
    }

    // Ensure all counts are zero
    return Object.values(charCount).every(count => count === 0);
}

// Example usage
const str1 = "listen";
const str2 = "silent";

console.log(areAnagrams(str1, str2)); // Output: true
