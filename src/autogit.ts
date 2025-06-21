function areAnagrams(str1: string, str2: string): boolean {
    // Step 1: Normalize the strings (remove spaces, convert to lowercase)
    const normalize = (str: string): string =>
        str.replace(/\s+/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // Step 2: If lengths differ, they cannot be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Step 3: Sort the characters and compare
    const sortString = (str: string): string =>
        str.split('').sort().join('');

    return sortString(normalizedStr1) === sortString(normalizedStr2);
}

// Example Usage
console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "Olelh"));   // true
console.log(areAnagrams("Triangle", "Integral")); // true
console.log(areAnagrams("Apple", "Pabble")); // false
function areAnagramsUsingFrequencyMap(str1: string, str2: string): boolean {
    // Normalize the strings
    const normalize = (str: string): string =>
        str.replace(/\s+/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // If lengths differ, they cannot be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Create a frequency map for the first string
    const frequencyMap: Record<string, number> = {};

    for (const char of normalizedStr1) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Compare with the second string
    for (const char of normalizedStr2) {
        if (!frequencyMap[char]) {
            return false; // Character not found or frequency mismatch
        }
        frequencyMap[char]--;
    }

    return true;
}

// Example Usage
console.log(areAnagramsUsingFrequencyMap("Listen", "Silent")); // true
console.log(areAnagramsUsingFrequencyMap("Hello", "Olelh"));   // true
console.log(areAnagramsUsingFrequencyMap("Triangle", "Integral")); // true
console.log(areAnagramsUsingFrequencyMap("Apple", "Pabble")); // false
function areAnagrams(str1: string, str2: string): boolean {
    const normalize = (str: string): string =>
        str.replace(/\s+/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    const sortString = (str: string): string =>
        str.split('').sort().join('');

    return sortString(normalizedStr1) === sortString(normalizedStr2);
}
