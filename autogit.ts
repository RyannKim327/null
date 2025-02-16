function areAnagrams(str1: string, str2: string): boolean {
    const normalize = (str: string) => 
        str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

    return normalize(str1) === normalize(str2);
}

// Example usage
const string1 = "Listen";
const string2 = "Silent";
console.log(areAnagrams(string1, string2)); // Output: true
