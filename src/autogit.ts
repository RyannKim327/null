function areAnagrams(str1: string, str2: string): boolean {
    // Helper function to clean and sort the string
    const normalize = (str: string): string => {
        return str
            .replace(/\s+/g, '')  // Remove all whitespace
            .toLowerCase()        // Convert to lowercase
            .split('')            // Split into array of characters
            .sort()               // Sort the array alphabetically
            .join('');            // Join back into a string
    };

    // Normalize and compare both strings
    return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("apple", "pale")); // false
function areAnagrams(str1: string, str2: string): boolean {
    const normalize = (str: string): string => {
        return str.replace(/\s+/g, '').toLowerCase();
    };

    const charCount = (str: string): { [key: string]: number } => {
        const count: { [key: string]: number } = {};
        for (const char of str) {
            count[char] = (count[char] || 0) + 1;
        }
        return count;
    };

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    const count1 = charCount(normalizedStr1);
    const count2 = charCount(normalizedStr2);

    for (const char in count1) {
        if (count1[char] !== count2[char]) {
            return false;
        }
    }

    return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("apple", "pale")); // false
