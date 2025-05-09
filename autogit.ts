function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings: remove spaces and convert to lowercase
    const normalizedStr1 = str1.replace(/\s/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s/g, '').toLowerCase();

    // If lengths are different, they cannot be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Sort the characters of both strings and compare
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage
const str1 = "listen";
const str2 = "silent";

console.log(areAnagrams(str1, str2)); // Output: true
