function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z]/g, '');
    
    // Check if the lengths of the two strings are equal
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Sort the characters of each string and compare them
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

// Test cases
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
