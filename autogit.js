function isAnagram(str1, str2) {
    // Clean the strings (remove spaces and convert to lowercase)
    const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Check if the lengths of the cleaned strings match
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Sort the characters and compare the sorted strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function
const str1 = 'listen';
const str2 = 'silent';
console.log(isAnagram(str1, str2)); // Output: true
