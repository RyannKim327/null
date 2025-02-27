function areAnagrams(str1: string, str2: string): boolean {
    // Remove whitespace and convert to lowercase
    const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // Sort the characters and compare
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
const result = areAnagrams("listen", "silent"); // true
console.log(result);
