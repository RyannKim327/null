function isAnagram(str1, str2) {
    // Check if the strings are of different lengths
    if (str1.length !== str2.length) {
        return false;
    }

    // Create objects to store character frequencies for each string
    const charCount1 = {};
    const charCount2 = {};

    // Count the frequency of characters in str1
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Count the frequency of characters in str2
    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Compare the character frequencies of both strings
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

// Test the function
const string1 = "listen";
const string2 = "silent";
console.log(isAnagram(string1, string2)); // Output: true
