function areAnagrams(str1: string, str2: string): boolean {
    const normalize = (str: string): string => {
        return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    };

    return normalize(str1) === normalize(str2);
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
const result = areAnagrams(string1, string2);
console.log(result); // true
