function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings: remove spaces and convert to lowercase
    const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    
    // Normalize both strings
    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);
    
    // Compare the normalized strings
    return normalizedStr1 === normalizedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";

console.log(areAnagrams(string1, string2)); // Output: true
