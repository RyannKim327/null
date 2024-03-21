function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert the strings to lowercase
    str1 = str1.replace(/[^\w]/g, "").toLowerCase();
    str2 = str2.replace(/[^\w]/g, "").toLowerCase();

    // Check if the strings have the same length
    if (str1.length !== str2.length) {
        return false;
    }

    // Create objects to store the character frequencies of each string
    const charCount1 = {};
    const charCount2 = {};

    // Count the frequency of each character in the first string
    for (let char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Count the frequency of each character in the second string
    for (let char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Compare the character frequencies of the two strings
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

// Test the function
const str1 = "listen";
const str2 = "silent";
console.log(isAnagram(str1, str2)); // Output: true
