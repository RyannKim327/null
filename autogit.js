function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
    str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

    // Sort the characters of the strings and compare them
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Test the function
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
