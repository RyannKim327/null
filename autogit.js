function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^\w]/g, "").toLowerCase();
    str2 = str2.replace(/[^\w]/g, "").toLowerCase();

    // Check if the lengths of the two strings are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Create character frequency object for str1
    const charMap = {};
    for (let char of str1) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    // Check character frequency for str2
    for (let char of str2) {
        if (!charMap[char]) {
            return false;
        } else {
            charMap[char]--;
        }
    }

    return true;
}

// Test the function
const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2)); // Output: true
