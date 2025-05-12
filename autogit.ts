function areAnagrams(str1: string, str2: string): boolean {
    // Clean up the strings: remove spaces, convert to lowercase
    const normalize = (str: string) =>
        str.replace(/\s+/g, '').toLowerCase();

    const sortedStr1 = normalize(str1).split('').sort().join('');
    const sortedStr2 = normalize(str2).split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Usage
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false
