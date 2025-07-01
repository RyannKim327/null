function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings by removing spaces, converting to lowercase, and sorting
    const normalize = (str: string): string =>
        str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');

    return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
function areAnagrams(str1: string, str2: string): boolean {
    // Helper function to create a frequency map
    const buildFrequencyMap = (str: string): Record<string, number> => {
        const frequency: Record<string, number> = {};
        for (const char of str.replace(/\s+/g, '').toLowerCase()) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
        return frequency;
    };

    const freq1 = buildFrequencyMap(str1);
    const freq2 = buildFrequencyMap(str2);

    // Compare the two frequency maps
    const keys1 = Object.keys(freq1);
    const keys2 = Object.keys(freq2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
        if (freq1[key] !== freq2[key]) return false;
    }

    return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
