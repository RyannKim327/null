function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^a-z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-z]/g, '').toLowerCase();

    // Convert strings to arrays, sort them, and join back to strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare the two sorted strings
    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = 'anagram';
const string2 = 'nag a ram';
console.log(isAnagram(string1, string2)); // Output: true
