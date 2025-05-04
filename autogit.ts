function areAnagrams(str1: string, str2: string): boolean {
    // Normalize: remove spaces and convert to lower case
    const normalizeString = (str: string) => {
        return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    };

    // Normalize both strings
    const normalizedStr1 = normalizeString(str1);
    const normalizedStr2 = normalizeString(str2);

    // Compare the normalized strings
    return normalizedStr1 === normalizedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";

console.log(areAnagrams(string1, string2)); // Output: true
