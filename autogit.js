function isAnagram(str1, str2) {
    // Remove any non-alphanumeric characters and convert to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Create character frequency maps for both strings
    const charMap1 = createCharMap(str1);
    const charMap2 = createCharMap(str2);

    // Compare the character maps
    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }

    return true;
}

function createCharMap(str) {
    const charMap = {};

    for (let char of str) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    return charMap;
}

// Test the function
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
