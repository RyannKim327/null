function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings
    const normalizedStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Sort the characters of both strings
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage:
const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2)); // Output: true
