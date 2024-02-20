function isAnagram(str1, str2) {
    // Normalize the strings
    const normalizeString = str => str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    const normalizedStr1 = normalizeString(str1);
    const normalizedStr2 = normalizeString(str2);

    // Convert strings to arrays, sort them and join back to string
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = "Listen";
const string2 = "Silent";
console.log(isAnagram(string1, string2)); // Output: true
