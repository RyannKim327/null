function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
    str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

    // Check if the lengths are the same
    if (str1.length !== str2.length) {
        return false;
    }

    // Create character count objects for both strings
    let charCount1 = {};
    let charCount2 = {};

    // Count characters in the first string
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Count characters in the second string
    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Compare character counts
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

// Test the function
const str1 = 'listen';
const str2 = 'silent';
console.log(areAnagrams(str1, str2)); // Output: true
