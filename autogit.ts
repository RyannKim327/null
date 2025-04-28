function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings: convert to lower case and remove spaces
    const normalizedStr1 = str1.toLowerCase().replace(/\s+/g, '');
    const normalizedStr2 = str2.toLowerCase().replace(/\s+/g, '');
    
    // If lengths are different, they can't be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Sort the characters in both strings and compare
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

// Example usage
console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "World"));   // false
