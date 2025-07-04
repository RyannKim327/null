function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings: remove spaces, convert to lowercase
    const normalize = (str: string): string => 
        str.replace(/\s+/g, '').toLowerCase();

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // Convert to arrays, sort, and join back into strings
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
