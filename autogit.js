function isAnagram(str1, str2) {
    // Remove all non-alphabetic characters and convert the strings to lowercase
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Check if the lengths of the strings are the same
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Sort the characters in the strings and compare them
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = 'listen';
const string2 = 'silent';
console.log(isAnagram(string1, string2)); // Output: true
