function areAnagrams(str1: string, str2: string): boolean {
    const normalize = (str: string) => 
        str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');

    return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
console.log(areAnagrams("A gentleman", "Elegant man")); // true
