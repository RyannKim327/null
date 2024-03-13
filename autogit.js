function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    
    // Check if the lengths are equal
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Convert strings to arrays, sort them, and convert back to strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = 'listen';
const string2 = 'silent';
if (areAnagrams(string1, string2)) {
    console.log('The strings are anagrams.');
} else {
    console.log('The strings are not anagrams.');
}
