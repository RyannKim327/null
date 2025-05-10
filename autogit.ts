function areAnagrams(str1: string, str2: string): boolean {
    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // Check if lengths are different
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Sort characters and compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage
console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "World"));   // false
