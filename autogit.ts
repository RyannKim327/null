function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings: remove spaces and convert to lowercase
    const normalize = (str: string): string => 
        str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');

    // Compare the normalized strings
    return normalize(str1) === normalize(str2);
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true

const string3 = "hello";
const string4 = "world";
console.log(areAnagrams(string3, string4)); // Output: false
