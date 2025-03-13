function areAnagrams(str1: string, str2: string): boolean {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if lengths are different
    if (cleanStr1.length !== cleanStr2.length) return false;

    // Create character frequency map
    const charMap = new Map<string, number>();

    // Count characters in first string
    for (const char of cleanStr1) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    // Decrement characters from second string
    for (const char of cleanStr2) {
        if (!charMap.has(char)) return false;
        
        const count = charMap.get(char)!;
        if (count === 1) {
            charMap.delete(char);
        } else {
            charMap.set(char, count - 1);
        }
    }

    return charMap.size === 0;
}

// Usage
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
function areAnagramsSorted(str1: string, str2: string): boolean {
    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if lengths are different
    if (cleanStr1.length !== cleanStr2.length) return false;

    // Sort characters and compare
    return cleanStr1.split('').sort().join('') === 
           cleanStr2.split('').sort().join('');
}

// Usage
console.log(areAnagramsSorted('listen', 'silent')); // true
function areAnagramsArray(str1: string, str2: string): boolean {
    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if lengths are different
    if (cleanStr1.length !== cleanStr2.length) return false;

    // Create character count array (assuming ASCII)
    const charCount = new Array(26).fill(0);

    // Increment for first string
    for (const char of cleanStr1) {
        charCount[char.charCodeAt(0) - 97]++;
    }

    // Decrement for second string
    for (const char of cleanStr2) {
        const index = char.charCodeAt(0) - 97;
        charCount[index]--;
        if (charCount[index] < 0) return false;
    }

    return true;
}

// Usage
console.log(areAnagramsArray('listen', 'silent')); // true
