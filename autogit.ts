function areAnagrams(str1: string, str2: string): boolean {
    // Normalize the strings: remove spaces and convert to lowercase
    const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();
    
    // Get normalized and sorted character arrays
    const normalizedStr1 = normalize(str1).split('').sort().join('');
    const normalizedStr2 = normalize(str2).split('').sort().join('');
    
    // Compare the two sorted strings
    return normalizedStr1 === normalizedStr2;
}

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("apple", "pale")); // false
