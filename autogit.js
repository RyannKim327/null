function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
    str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

    // Check if the lengths of both strings are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters of both strings and compare them
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = 'listen';
const string2 = 'silent';
console.log(isAnagram(string1, string2)); // Output: true
