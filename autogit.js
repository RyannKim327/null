function isAnagram(str1, str2) {
    // Remove any special characters, spaces, and convert to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Check if the lengths of the two strings are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters in the strings and compare them
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false
