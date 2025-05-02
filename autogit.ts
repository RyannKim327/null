function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings by removing whitespace and converting to lowercase
    const normalize = (str: string): string => 
        str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');

    // Normalize both strings
    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // Compare the normalized strings
    return normalizedStr1 === normalizedStr2;
}

// Example usage
const stringA = "listen";
const stringB = "silent";

console.log(areAnagrams(stringA, stringB)); // Output: true
