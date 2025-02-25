function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings by removing spaces and converting to lowercase
    const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // Sort the characters of each string
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
