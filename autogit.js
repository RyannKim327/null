function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
    str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

    // Check if the strings are of equal length
    if (str1.length !== str2.length) {
        return false;
    }

    // Create character frequency maps for both strings
    const charMap1 = {};
    const charMap2 = {};

    for (let char of str1) {
        charMap1[char] = (charMap1[char] || 0) + 1;
    }

    for (let char of str2) {
        charMap2[char] = (charMap2[char] || 0) + 1;
    }

    // Compare the character frequency maps
    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }

    return true;
}

// Example usage
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
