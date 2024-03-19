function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert the strings to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters of the strings and compare them
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = "listen";
const string2 = "silent";
console.log(isAnagram(string1, string2)); // Output: true
