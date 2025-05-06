function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings by removing spaces and converting to lowercase
    const normalize = (str: string) => 
        str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    
    return normalize(str1) === normalize(str2);
}

// Example Usage:
const string1 = "listen";
const string2 = "silent";

console.log(areAnagrams(string1, string2)); // Output: true
