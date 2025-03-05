function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings by removing spaces and converting to lower case
    const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    
    // Normalize both strings and check if they are equal
    return normalize(str1) === normalize(str2);
}

// Example usage
const str1 = "Listen";
const str2 = "Silent";

console.log(areAnagrams(str1, str2)); // Output: true
