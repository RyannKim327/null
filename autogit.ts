function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings
    const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    
    // Compare the normalized strings
    return normalize(str1) === normalize(str2);
}

// Example usage
const string1 = "Listen";
const string2 = "Silent";
console.log(areAnagrams(string1, string2)); // true
