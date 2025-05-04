function areAnagrams(str1: string, str2: string): boolean {
    // Remove whitespace and convert to lower case
    const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // Sort the characters in each string
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";

console.log(areAnagrams(string1, string2)); // true
