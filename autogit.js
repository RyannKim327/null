function checkAnagrams(str1, str2) {
    // Remove special characters and spaces, convert to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Check if the lengths of the strings are the same after removing spaces and special characters
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Convert strings to arrays, sort them, and compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';
if (checkAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
