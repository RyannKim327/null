function areAnagrams(str1, str2) {
    // Remove all non-word characters and convert to lowercase
    str1 = str1.replace(/[\W_]/g, '').toLowerCase();
    str2 = str2.replace(/[\W_]/g, '').toLowerCase();

    // Check if the lengths of the two strings are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Convert the strings to arrays, sort them, and convert back to strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Test cases
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
