function areAnagrams(str1: string, str2: string): boolean {
    // Helper function to normalize a string
    const normalize = (str: string): string => {
        return str
            .replace(/\s+/g, '') // Remove all whitespace
            .toLowerCase()       // Convert to lowercase
            .split('')           // Split into an array of characters
            .sort()              // Sort the characters alphabetically
            .join('');           // Join back into a string
    };

    // Normalize both strings and compare
    return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("apple", "pale")); // false
function areAnagramsOptimized(str1: string, str2: string): boolean {
    const normalize = (str: string): string => {
        return str.replace(/\s+/g, '').toLowerCase();
    };

    const countChars = (str: string): Record<string, number> => {
        const charCount: Record<string, number> = {};
        for (const char of str) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        return charCount;
    };

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    if (normalizedStr1.length !== normalizedStr2.length) {
        return false; // Different lengths, not anagrams
    }

    const charCount1 = countChars(normalizedStr1);
    const charCount2 = countChars(normalizedStr2);

    // Compare character counts
    for (const char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

// Example usage:
console.log(areAnagramsOptimized("listen", "silent")); // true
console.log(areAnagramsOptimized("triangle", "integral")); // true
console.log(areAnagramsOptimized("apple", "pale")); // false
