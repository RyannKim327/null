function isAnagram(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^a-z]/ig, '').toLowerCase();
    str2 = str2.replace(/[^a-z]/ig, '').toLowerCase();

    // Check if string lengths are the same
    if (str1.length !== str2.length) {
        return false;
    }

    // Create character frequency objects
    const charFreq1 = {};
    const charFreq2 = {};

    for (let char of str1) {
        charFreq1[char] = (charFreq1[char] || 0) + 1;
    }

    for (let char of str2) {
        charFreq2[char] = (charFreq2[char] || 0) + 1;
    }

    // Compare character frequency objects
    for (let char in charFreq1) {
        if (charFreq1[char] !== charFreq2[char]) {
            return false;
        }
    }

    return true;
}

// Test the function
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
