function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings: change to lower case and remove spaces
    const normalizedStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    const normalizedStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    
    // Compare the normalized strings
    return normalizedStr1 === normalizedStr2;
}

// Example usage:
const string1 = "Listen";
const string2 = "Silent";
const string3 = "Hello";

console.log(areAnagrams(string1, string2)); // true
console.log(areAnagrams(string1, string3)); // false
