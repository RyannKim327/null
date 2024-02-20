function isAnagram(str1, str2) {
    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[\W_]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[\W_]/g, '').toLowerCase();

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
console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false
