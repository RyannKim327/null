function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^a-z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-z]/g, '').toLowerCase();

    // Check if the lengths of the two strings are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters in both strings and compare them
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Test the function
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
