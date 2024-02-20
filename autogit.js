function isAnagram(str1, str2) {
    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the two cleaned strings have the same length
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Sort the characters of both strings and check if they are the same
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function
const str1 = "hello";
const str2 = "olleh";
console.log(isAnagram(str1, str2)); // Output: true
