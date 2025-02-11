function areAnagrams(str1: string, str2: string): boolean {
    // Remove spaces and convert to lowercase
    const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // If lengths are different, they cannot be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Create frequency maps for both strings
    const frequencyMap: { [key: string]: number } = {};

    for (const char of normalizedStr1) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    for (const char of normalizedStr2) {
        if (!frequencyMap[char]) {
            return false;
        }
        frequencyMap[char] -= 1;
        if (frequencyMap[char] < 0) {
            return false;
        }
    }

    return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
console.log(areAnagrams("Dormitory", "Dirty room")); // true
