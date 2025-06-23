function areAnagrams(str1: string, str2: string): boolean {
    // Step 1: Normalize the strings (remove spaces, convert to lowercase)
    const normalize = (str: string): string =>
        str.replace(/\s+/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // Step 2: Early exit if lengths differ
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Step 3: Sort the characters and compare
    const sortString = (str: string): string =>
        str.split('').sort().join('');

    return sortString(normalizedStr1) === sortString(normalizedStr2);
}

// Example usage:
console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "Olelh"));   // true
console.log(areAnagrams("Test", "Best"));     // false
function areAnagramsUsingFrequency(str1: string, str2: string): boolean {
    const normalize = (str: string): string =>
        str.replace(/\s+/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    const charCount = (str: string): { [key: string]: number } => {
        const count: { [key: string]: number } = {};
        for (const char of str) {
            count[char] = (count[char] || 0) + 1;
        }
        return count;
    };

    const count1 = charCount(normalizedStr1);
    const count2 = charCount(normalizedStr2);

    for (const char in count1) {
        if (count1[char] !== count2[char]) {
            return false;
        }
    }

    return true;
}

// Example usage:
console.log(areAnagramsUsingFrequency("Listen", "Silent")); // true
console.log(areAnagramsUsingFrequency("Hello", "Olelh"));   // true
console.log(areAnagramsUsingFrequency("Test", "Best"));     // false
