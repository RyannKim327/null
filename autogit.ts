function areAnagrams(str1: string, str2: string): boolean {
    // Normalize: convert to lowercase and remove spaces
    const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    
    // Normalize both strings
    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);
    
    // Compare normalized strings
    return normalizedStr1 === normalizedStr2;
}

// Example usage
const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2)); // Output: true

const str3 = "hello";
const str4 = "world";
console.log(areAnagrams(str3, str4)); // Output: false
