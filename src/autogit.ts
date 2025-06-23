function areAnagrams(str1: string, str2: string): boolean {
    // Helper function to normalize a string
    const normalize = (str: string): string => {
        return str
            .replace(/[^a-zA-Z]/g, '') // Remove non-alphabetic characters
            .toLowerCase()             // Convert to lowercase
            .split('')                 // Split into characters
            .sort()                    // Sort characters alphabetically
            .join('');                 // Join back into a string
    };

    // Normalize both strings and compare
    return normalize(str1) === normalize(str2);
}

// Example Usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("apple", "pale")); // false
function areAnagrams(str1: string, str2: string): boolean {
    // Helper function to create a character frequency map
    const buildCharMap = (str: string): Record<string, number> => {
        const charMap: Record<string, number> = {};
        for (const char of str.replace(/[^a-zA-Z]/g, '').toLowerCase()) {
            charMap[char] = (charMap[char] || 0) + 1;
        }
        return charMap;
    };

    const charMap1 = buildCharMap(str1);
    const charMap2 = buildCharMap(str2);

    // Compare the keys and values of both maps
    const keys1 = Object.keys(charMap1);
    const keys2 = Object.keys(charMap2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (charMap1[key] !== charMap2[key]) {
            return false;
        }
    }

    return true;
}

// Example Usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("apple", "pale")); // false
function areAnagrams(str1: string, str2: string): boolean {
    const normalize = (str: string): string => {
        return str
            .replace(/[^a-zA-Z]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    };
    return normalize(str1) === normalize(str2);
}
