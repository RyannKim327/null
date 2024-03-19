function checkAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
    str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

    // Check if the lengths are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters and compare
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';

if (checkAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
