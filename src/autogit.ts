function areAnagrams(str1: string, str2: string): boolean {
    // Helper function to normalize and sort a string
    const normalize = (str: string): string => {
        return str
            .toLowerCase() // Convert to lowercase
            .replace(/[^a-z0-9]/g, '') // Remove non-alphanumeric characters (optional)
            .split('') // Split into characters
            .sort() // Sort characters alphabetically
            .join(''); // Join back into a string
    };

    // Normalize and compare both strings
    return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("apple", "pale")); // false
function areAnagrams(str1: string, str2: string): boolean {
    const buildCharMap = (str: string): { [key: string]: number } => {
        const charMap: { [key: string]: number } = {};
        for (const char of str.toLowerCase().replace(/[^a-z0-9]/g, '')) {
            charMap[char] = (charMap[char] || 0) + 1;
        }
        return charMap;
    };

    const charMap1 = buildCharMap(str1);
    const charMap2 = buildCharMap(str2);

    const keys1 = Object.keys(charMap1);
    const keys2 = Object.keys(charMap2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
        if (charMap1[key] !== charMap2[key]) return false;
    }

    return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("apple", "pale")); // false
