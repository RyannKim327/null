function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings: convert to lowercase and remove spaces
    const normalize = (str: string): string => str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');

    // Compare normalized versions of both strings
    return normalize(str1) === normalize(str2);
}

// Example usage
const string1 = "Listen";
const string2 = "Silent";

console.log(areAnagrams(string1, string2)); // Output: true
